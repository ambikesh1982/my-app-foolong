import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Subscription } from "rxjs/Subscription";
import { AuthService } from "app/user-profile/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit,OnDestroy {
subscription: Subscription;
currentUser: firebase.User;
  constructor(
    private _auth: AuthService,
    public location: Location
  ) {
    // this.user$ = afAuth.authState;
  }
  ngOnInit() { 
    this.subscription = this._auth.getAuthState().subscribe(
      (user)=>{
        this.currentUser = user;
        console.log('AnonymousUser: ',user);
      }
    );
  }

  loginAnonymous() {
    this._auth.loginAnonymous();
  }

  loginGoogle(){
    this._auth.loginGoogle();
  }

  loginFacebook(){

  }

  logout() { this._auth.logout() }

  ngOnDestroy() { this.subscription.unsubscribe(); }
}
