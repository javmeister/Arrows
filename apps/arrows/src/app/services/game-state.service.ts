import { inject, Injectable, OnDestroy, signal } from '@angular/core';
import { Auth, User, user, authState  } from '@angular/fire/auth';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameStateService implements OnDestroy {
  private readonly highestLevelCompleted = signal<number>(0);

  private auth: Auth = inject(Auth);
  public user$ = user(this.auth);

  public authState$ = authState(auth);

  private authStateSubscription: Subscription;
  private userSubscription: Subscription;

  constructor() {
    this.userSubscription = this.user$.subscribe((theUser: User | null) => {
      //handle user state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(theUser);

      if (theUser) {
        // User is logged in
        // You can fetch and update user-specific game state here
      }
    });

    this.authStateSubscription = this.authState$.subscribe((theUser: User | null) => {
      //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
      console.log(theUser);

      if (theUser) {
        // User is logged in
        // You can fetch and update user-specific game state here
      }
    });
  }

  ngOnDestroy() {
    // when manually subscribing to an observable remember to unsubscribe in ngOnDestroy
    this.userSubscription?.unsubscribe();
    this.authStateSubscription?.unsubscribe();
  }
}
