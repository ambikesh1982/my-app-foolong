import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import {FoodItem} from '../app-frame/fooditem/fooditem.model';
import { FoodDataService } from "app/app-frame/fooditem/fooditem.service";

@Component({
  selector: 'app-food-cart',
  template: `
    <div style="margin-bottom:100px">
      <md-toolbar>
        <app-nav-back [location]="this.location"></app-nav-back>
        <span>My Cart({{itemsInCart}})</span>
      </md-toolbar>
      <md-card *ngIf="itemsInCart === 0" style="text-align:center">
        Your CART is empty: Go Shopping!
      </md-card>
      <div class="row">
        <div 
          class="foolong-col-4 foolong-col-m-6" 
          *ngFor="let fcitems of foodCartItems; let i = index">
            <app-food-cart-item 
              [index]="i" 
              [foodCartItem]="fcitems">
            </app-food-cart-item>
        </div>
        <button md-button *ngIf="itemsInCart !== 0" style="float:right;color:blue">Add More Items!</button>
        <app-food-cart-summary *ngIf="itemsInCart !== 0"
          [itemsInTheCart]="itemsInCart" 
          [amountPayable]="200">
        </app-food-cart-summary>
      </div>
    </div>
    <app-food-cart-fab [itemsInTheCart]="itemsInCart"></app-food-cart-fab>
  `,
})
export class FoodCartComponent implements OnInit {

 foodCartItems:FoodItem[];
 itemsInCart: number;

constructor(
  private fs: FoodDataService,
  private location: Location
) { 
   this.foodCartItems =[];
   this.itemsInCart = 0;
}
  
  ngOnInit() {
    this.foodCartItems = this.fs.getFoodCartItems();
    this.itemsInCart = this.foodCartItems.length;
  }
}
