import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo, AuthError } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly auth = inject(Auth);

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

    // Do something with the user info and token as needed


    } catch (error: any) {
      console.error('Error signing in with Google:', error);

    }
  }
}
