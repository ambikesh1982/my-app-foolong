import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

import { FoodItem } from '../app-frame/fooditem/fooditem.model';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { FoodCartService } from 'app/food-cart/food-cart.service';

import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-food-cart',
  templateUrl: 'food-cart.component.html'
})
export class FoodCartComponent implements OnInit, OnDestroy {

  foodCartItems: FoodItem[];
  previousPage: Location;
  itemsInTheCart: number;
  subscription: Subscription;
  amountPayable: number;


  constructor(private fcs: FoodCartService, private location: Location) {
    this.foodCartItems = [];
    this.previousPage = this.location;
  }

  ngOnInit() {
    this.foodCartItems = this.fcs.getCartItems();
    this.amountPayable =this.fcs.calcAmountPayable();

    console.log("total=",this.amountPayable)
    this.subscription = this.fcs.getCartSize().subscribe(
      (val) => this.itemsInTheCart = val,
      (err) => console.log(err)
    );

   /*  this.subscription = this.fcs.calcAmountPayable().subscribe(
      (val) => this.amountPayable = val,
      (err) => console.log(err)
    );
        console.log("total=",this.amountPayable);*/
}

  onDeleteCartItem(arrayIndextoDelete: number) {
    this.fcs.deleteCartItems(arrayIndextoDelete);
    this.amountPayable =this.fcs.calcAmountPayable();
  }

onRemoveAllCartItem() {
    this.fcs.removeAllCartItems();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
