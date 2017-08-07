import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import * as firebase from 'firebase/app';

@Injectable()

export class AuthService implements OnInit, OnDestroy {

    private user$: Observable<firebase.User>;
    private subscription: Subscription;
    private currentUser: firebase.User = null;
    isUserAnonymous = true;

    // AngularFire2 returns Observable<firebase.User> to monitor authentication state.
    constructor(private afAuth: AngularFireAuth) {
        this.user$ = afAuth.authState;
        this.user$.subscribe(
            (user) => {
                if (user) {
                    this.currentUser = user;
                    this.isUserAnonymous = user.isAnonymous;
                } else {
                    this.currentUser = null;
                }
            });
    }

    ngOnInit() {
        this.subscription = this.user$.subscribe(
            (user) => {
                console.log('AnonymousUser: ', user);
            }
        );
    }

    emaiSignup(email: string, password: string) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Success!', value);
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });
    }

    loginEmail(email: string, password: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
            })
            .catch(err => {
                console.log('Something went wrong:', err.message);
            });

    }

    loginAnonymous() {
        this.afAuth.auth.signInAnonymously().then(
            (user: firebase.User) => {
                this.currentUser = user;
            },
            (e) => console.log(e))
    }

    isAnonymous(): boolean{
        if(this.currentUser.isAnonymous){
            return true;
        }
    }

    loginGoogle() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    loginFacebook() {
        this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }

    getAuthState(){
        return this.user$;
    }

    // Universal LogOut method.
    logout() {
        this.afAuth.auth.signOut();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}