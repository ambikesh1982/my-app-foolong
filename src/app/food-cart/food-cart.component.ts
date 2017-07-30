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

  constructor(private fcs: FoodCartService, private location: Location) {
    this.foodCartItems = [];
    this.previousPage = this.location;
  }

  ngOnInit() {
    this.foodCartItems = this.fcs.getCartItems();
    this.subscription = this.fcs.getCartSize().subscribe(
      (val) => this.itemsInTheCart = val,
      (err) => console.log(err)
    );
  }

  onDeleteCartItem(arrayIndextoDelete: number) {
    this.fcs.deleteCartItems(arrayIndextoDelete);
  }

onRemoveAllCartItem() {
    this.fcs.removeAllCartItems();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
