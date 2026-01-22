import {
  EnvironmentInjector,
  Injectable,
  OnDestroy,
  inject,
  runInInjectionContext,
} from '@angular/core';
import {
  Auth,
  GoogleAuthProvider,
  signInWithPopup,
  getAdditionalUserInfo,
  authState,
  User,
} from '@angular/fire/auth';
import { Firestore, doc, setDoc, getDoc } from '@angular/fire/firestore';
import { UserGameProfile } from '../models/user-game-profile';
import { Subscription } from 'rxjs';
import { GameStateService } from './game-state.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private readonly auth = inject(Auth);
  private readonly firestore = inject(Firestore);
  private readonly gameState = inject(GameStateService);
  private environmentInjector = inject(EnvironmentInjector);

  private readonly authState$ = authState(this.auth);
  private readonly authStateSubscription: Subscription;

  constructor() {
    this.authStateSubscription = this.authState$.subscribe(
      (theUser: User | null) => {
        // handle auth state changes here. Note, that user will be null if there is no currently logged in user.
        if (theUser) {
          // User is logged in, You can fetch and update user-specific game state here
          this.getUserGameProfile(theUser);
        }
      },
    );
  }

  private getUserGameProfile(theUser: User) {
    runInInjectionContext(this.environmentInjector, () => {
      const userProfileDocReference = doc(this.firestore, 'users', theUser.uid);

      // e.g., fetch user profile from Firestore and update local state
      getDoc(userProfileDocReference).then((userProfileDoc) => {
        if (userProfileDoc.exists()) {
          const userGameProfile = userProfileDoc.data() as UserGameProfile;

          // console.log('User Game Profile:', userGameProfile);

          // Update the game state signals
          this.gameState.currentLevel.set(userGameProfile.currentLevel);
          this.gameState.highestLevelCompleted.set(
            userGameProfile.highestLevelCompleted,
          );
        }
      });
    });
  }

  ngOnDestroy() {
    this.authStateSubscription?.unsubscribe();
  }

  async signInWithGoogle() {
    try {
      const result = await signInWithPopup(this.auth, new GoogleAuthProvider());

      // This gives you a Google Access Token. You can use it to access Google APIs.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      // The signed-in user info.
      const user = result.user;

      // IdP data available using getAdditionalUserInfo(result)
      const additionalUserInfo = getAdditionalUserInfo(result);

      if (additionalUserInfo?.isNewUser) {
        // if the user is new, create the game profile in the users database in firestore
        // save the profile.family_name and given_name to the user document in firestore
        // also create the current level int flag and set it to 1

        // get a reference to the user-profile collection
        const userProfileDoc = doc(this.firestore, 'users', user.uid);

        let familyName = '';
        let givenName = '';
        let email = '';
        let picture = '';

        if (additionalUserInfo?.profile) {
          familyName = additionalUserInfo.profile['family_name'] as string;
          givenName = additionalUserInfo.profile['given_name'] as string;
          email = additionalUserInfo.profile['email'] as string;
          picture = additionalUserInfo.profile['picture'] as string;
        }

        const documentReference = await setDoc(userProfileDoc, <
          UserGameProfile
        >{
          profile: {
            familyName: familyName,
            givenName: givenName,
            email,
            picture,
          },
          currentLevel: 1,
          highestLevelCompleted: 0,
        });

        // the documentReference provides access to the newly created document
        console.log(documentReference);
      }
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
    }
  }
}
