import { Component, Input } from '@angular/core';
import { FoodCartService } from "app/food-cart/food-cart.service";

@Component({
  selector: 'app-cart-icon',
  template: `
    <a md-icon-button 
        routerLink="/food-cart" routerLinkActive="active" 
        mdTooltip="Cart" mdTooltipShowDelay="1000">
        <md-icon>add_shopping_cart</md-icon>
        <span *ngIf="itemsInTheCart>0" class="mycart">{{itemsInTheCart}}</span>
    </a>
  `,
  styles: [`
    .mycart {
      position:absolute;
      bottom:12px;
      right:5px;
      text-align:center;
      font-size:x-small;
      font-weight:bold;
      color:red;
    }
  `]
})
export class CartIconComponent {
  itemsInTheCart:number = 0;
  constructor(private fcs:FoodCartService) { 
    this.itemsInTheCart = fcs.itemsInTheCart;
  }

  ngOnInit() {
  }

}
