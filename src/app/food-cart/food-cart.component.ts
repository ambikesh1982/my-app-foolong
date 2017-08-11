import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { FoodItem } from '../app-frame/fooditem/fooditem.model';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { FoodCartService } from 'app/food-cart/food-cart.service';

import { Subscription } from "rxjs/Subscription";
import { FirebaseListObservable } from "angularfire2/database";
import { AuthService } from "app/user-profile/auth.service";

@Component({
  selector: 'app-food-cart',
  templateUrl: 'food-cart.component.html'
})
export class FoodCartComponent implements OnInit, OnDestroy {

  foodCartItems: FirebaseListObservable<FoodItem[]>;
  previousPage: Location = null;
  itemsInTheCart: number = 0;
  subscription: Subscription;
  amountPayable: number = 0;


  constructor(
    private _fcs: FoodCartService,
    private _auth: AuthService,
    private location: Location) {
    this.previousPage = this.location;
  }

  ngOnInit() {
    console.log("FoodCartComponent-UID: ",this._fcs.UID);
    this._auth.getAuthState().subscribe(
      (user)=>{
        this.foodCartItems = this._fcs.getCartItemList();
        this.subscription = this._fcs.getCartItemList().subscribe(
          (items)=> {
            this.itemsInTheCart = items.length;
            this._fcs.itemsInTheCart$.next(this.itemsInTheCart);
            this.amountPayable = 0;
            items.forEach(item => {
              this.amountPayable = this.amountPayable + item.foodPrice;
            });
          });
      });
  }

  onDeleteCartItem(key: string) {
    this._fcs.deleteCartItem(key);
  }

  onRemoveAllCartItem() {
    this._fcs.removeAllCartItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
