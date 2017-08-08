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
    // private currentUser: firebase.User = null;
    isUserAnonymous = true;


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

    loginAnonymous() {
        this._afAuth.auth.signInAnonymously()
        .catch((e)=> {
            console.log('Error from auth service',e)
            });
    }

    loginGoogle() {
        this._afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch((e)=> {
            console.log(e)
            });
    }
    loginFacebook() {
        this._afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .catch((e)=> {
            console.log(e)
            });
    }

    getAuthState(){
        return this.user$;
    }

    // Universal LogOut method.
    logout() {
        this._afAuth.auth.signOut();
    }

    // Don't need email login functionality. We can porvide only social login and phone 
    // number Authentication.
    
    // emaiSignup(email: string, password: string) {
    //     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    //         .then(value => {
    //             console.log('Success!', value);
    //         })
    //         .catch(err => {
    //             console.log('Something went wrong:', err.message);
    //         });
    // }

    // loginEmail(email: string, password: string) {
    //     this.afAuth.auth.signInWithEmailAndPassword(email, password)
    //         .then(value => {
    //             console.log('Nice, it worked!');
    //         })
    //         .catch(err => {
    //             console.log('Something went wrong:', err.message);
    //         });
    // }
}