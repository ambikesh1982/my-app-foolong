import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from "app/user-profile/auth.service";
import { FoodCartService } from "app/food-cart/food-cart.service";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Foodz9';
  fabicon = 'add';
  uid = 'PENDING_UID';

  constructor( private _auth: AuthService, private _appCart: FoodCartService){
    console.log("AppComponent-Constructor call");
  }
}
