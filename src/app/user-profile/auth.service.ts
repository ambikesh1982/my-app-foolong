// Auth service to handle all user authentication tasks. 
// 1)   Service Provider: app.module.ts
// 2)   Service scope: Whole application.


import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import * as firebase from 'firebase/app';

@Injectable()

export class AuthService {

    private user$: Observable<firebase.User>;
    private subscription: Subscription;
    private CURRENT_ANONYMOUS_USER: firebase.User;

    // AngularFire2 returns Observable<firebase.User> to monitor authentication state.
    constructor(private _afAuth: AngularFireAuth) {
        this.user$ = _afAuth.authState;
    }

    logUser(user: firebase.User){
        console.log('Current User details');
        console.log('UID: ',user.uid);
        console.log('DisplayName: ',user.displayName);
        console.log('email: ',user.email);
        console.log('emailVerified: ',user.emailVerified);
        console.log('isAnonymous: ',user.isAnonymous);
        console.log('phoneNumber: ',user.phoneNumber);
        console.log('photoURL: ',user.photoURL);
        console.log('providerData: ',user.providerData);
        console.log('providerId: ',user.providerId);
        console.log('refreshToken: ',user.refreshToken);
    };

    loginAnonymous(){
        this._afAuth.auth.signInAnonymously()
        .catch((e)=> {
            console.log('Error from auth service',e)
            });
    }

    loginGoogle() {
        this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch( 
            e=> { 
                console.log(e) 
            });
    }
    loginFacebook() {
        this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
         .catch( 
            e=> { 
                console.log(e) 
            });
    }

    getAuthState(){
        return this.user$;
    }

    getCurrentUser(){
            return this._afAuth.auth.currentUser;
    }

    isAuthenticated(){
        return this.user$ != null;
    }

    // Universal LogOut method.
    logout() {
        this._afAuth.auth.signOut();
    }
}