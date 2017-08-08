import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { FoodItem } from '../app-frame/fooditem/fooditem.model';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { FoodCartService } from 'app/food-cart/food-cart.service';

import { Subscription } from "rxjs/Subscription";
import { FirebaseListObservable } from "angularfire2/database";

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
    private location: Location) {
    this.previousPage = this.location;
  }

  ngOnInit() {
    this.foodCartItems = this._fcs.getCartItemList();
    this.subscription = this._fcs.getCartItemList().subscribe(
      (items)=> {
        // Getting length of cart list.
        this.itemsInTheCart = items.length;
        // emitting count of items in the cart. All subscriber get the updated value each time.
        this._fcs.itemsInTheCart$.next(this.itemsInTheCart);
        // Setting up amountPayable to 0. It will be recalculated based on cart list.
        this.amountPayable = 0;
        // Iterating each item in cart list and calculation amountPayable.
        items.forEach(item => {
          this.amountPayable = this.amountPayable + item.foodPrice;
        });
      }
    );
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
