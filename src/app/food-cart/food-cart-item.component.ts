import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { FoodItem } from '../app-frame/fooditem/fooditem.model';


@Component({
  selector: 'app-food-cart-item',
  templateUrl: 'food-cart-item.component.html',
  styles: []
})
export class FoodCartItemComponent {
  @Input() index: number;
  @Input() foodCartItem: FoodItem;
  @Output() onCartItemChange = new Subject<number>();

  constructor() 
  { }

  onDeleteCartItem(arrayIndextoDelete:number) {
    this.onCartItemChange.next(arrayIndextoDelete);
    //this.onClear();
  }
}
