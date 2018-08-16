import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthProvider {

  constructor( public afAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  signupUser(email, password) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  loginUser(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }
  resetPassword(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
  logoutUser() { return this.afAuth.auth.signOut(); }

  sendVerificationMail() {
    return this.afAuth.auth.currentUser.sendEmailVerification();
  }
  verifyUser(){
    return this.afAuth.auth.currentUser
    .sendEmailVerification();
  }

}
