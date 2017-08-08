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
  foodCartItems1: FoodItem[];
  previousPage: Location;
  itemsInTheCart: number;
  subscription: Subscription;
  amountPayable: number;


  constructor(private fcs: FoodCartService, private location: Location) {
    // this.foodCartItems = [];
    this.previousPage = this.location;
  }

  ngOnInit() {
    this.foodCartItems = this.fcs.getCartItemList();
    this.subscription = this.fcs.getCartItemList().subscribe(
      (items)=> {
        this.itemsInTheCart = items.length;
        this.fcs.itemsInTheCart.next(this.itemsInTheCart);
      }
    );

    this.amountPayable = this.fcs.calcAmountPayable();

    // this.subscription = this.fcs.getCartSize().subscribe(
    //   (val) => this.itemsInTheCart = val,
    //   (err) => console.log(err)
    // );

    /*  this.subscription = this.fcs.calcAmountPayable().subscribe(
       (val) => this.amountPayable = val,
       (err) => console.log(err)
     );
         console.log("total=",this.amountPayable);*/
  }

  // onDeleteCartItem(arrayIndextoDelete: number) {
  //   this.fcs.deleteCartItems(arrayIndextoDelete);
  //   this.amountPayable =this.fcs.calcAmountPayable();
  // }

  onDeleteCartItem(key: string) {
    this.fcs.deleteCartItem(key);
    this.amountPayable =this.fcs.calcAmountPayable();
  }

  onRemoveAllCartItem() {
    this.fcs.removeAllCartItems();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
