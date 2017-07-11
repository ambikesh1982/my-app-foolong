import { Component, OnInit, Input } from '@angular/core';

import {FoodItem} from '../app-frame/fooditem/fooditem.model';

@Component({
  selector: 'app-food-cart-item',
  template: `
    <md-card>
      <h4>{{index+1}}. {{foodCartItem.foodTitle}}</h4>
      <md-card-title-group>
        <img md-card-sm-image [src]="foodCartItem.foodImagePath" alt="foodCartItem.foodTitle">
        <md-card-subtitle>Seller: Ambikesh</md-card-subtitle>
        <md-card-subtitle>Serves 2 per portion.</md-card-subtitle>
        <md-card-subtitle>INR 200 per portion.</md-card-subtitle>
      </md-card-title-group>
      <md-card-actions>
        <button md-icon-button>
          <md-icon>remove</md-icon>
        </button>
        <span>1</span>
        <button md-icon-button>
          <md-icon>add</md-icon>
        </button>
        <span style="font-weight:bold">INR 200</span>
        <button md-icon-button>
          <md-icon style="color: red">delete_sweep
        </md-icon></button>
      </md-card-actions>
    </md-card>
  `,
  styles: []
})
export class FoodCartItemComponent implements OnInit {
  @Input() index: number;
  @Input() foodCartItem: FoodItem;
  constructor() { }

  ngOnInit() {
  }

}
