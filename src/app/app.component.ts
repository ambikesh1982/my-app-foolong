import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from "app/user-profile/auth.service";
import { FoodCartService } from "app/food-cart/food-cart.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'Foodz9';
  uid = 'PENDING_UID';
  subscription: Subscription;
  itemsInTheCart: number = 0;

  constructor(private _auth: AuthService, private _appCart: FoodCartService) {
    console.log("AppComponent-Constructor call");
  }

  ngOnInit() {
    this.subscription = this._auth.getAuthState()
      .flatMap((res) => this._appCart.getCartItemList(res))
      .subscribe(
        (items) => {
          this.itemsInTheCart = items.length;
          this._appCart.itemsInTheCart$.next(this.itemsInTheCart);
        });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
