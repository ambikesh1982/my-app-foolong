import { Component, OnInit, Input, Output } from '@angular/core';



import { FoodItem } from '../app-frame/fooditem/fooditem.model';
import { FoodCartService } from 'app/food-cart/food-cart.service';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-food-cart-item',
  templateUrl: 'food-cart-item.component.html',
  styles: []
})
export class FoodCartItemComponent {
  @Input() index: number;
  @Input() foodCartItem: FoodItem;

  constructor(private fcs: FoodCartService) 
  { }

  onDelete(foodItem: FoodItem) {
    console.log(foodItem);
    this.fcs.deleteFoodCartItems(foodItem);
  }
}
