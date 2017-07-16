import { Component, OnInit, Input, Output } from '@angular/core';

import { FoodItem } from '../app-frame/fooditem/fooditem.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-food-cart-item',
  templateUrl: 'food-cart-item.component.html',
  styles: []
})
export class FoodCartItemComponent {
  @Input() index: number;
  @Input() foodCartItem: FoodItem;

  constructor() { }

  onDelete(foodItem: FoodItem) {
    console.log(foodItem);
  }
}
