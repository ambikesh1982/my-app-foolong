import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { FoodItem } from '../app-frame/fooditem/fooditem.model';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { FoodCartService } from 'app/food-cart/food-cart.service';

@Component({
  selector: 'app-food-cart',
  templateUrl: 'food-cart.component.html'
})
export class FoodCartComponent implements OnInit {

  foodCartItems: FoodItem[];
  previousPage: Location;
  itemsInTheCart: number;

  constructor(
    private fcs: FoodCartService,
    private location: Location) {
    this.foodCartItems = [];
    this.previousPage = this.location;
  }

  ngOnInit() {
    this.foodCartItems = this.fcs.getFoodCartItems();
    this.itemsInTheCart = this.foodCartItems.length;
  }

}
