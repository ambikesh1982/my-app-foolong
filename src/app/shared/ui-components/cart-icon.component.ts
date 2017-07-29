import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodCartService } from 'app/food-cart/food-cart.service';
import { Subscription } from "rxjs/Subscription";

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
export class CartIconComponent implements OnInit,OnDestroy {
  itemsInTheCart = 0;
  subscription: Subscription;
  constructor(private fcs: FoodCartService) {
  }

  ngOnInit() {
    console.log('ngOnInit: CartIconComponent Initialized');
    this.subscription=this.fcs.getCartSize().subscribe(
      (value)=>{
        this.itemsInTheCart=value;
      },
      (err)=>console.log(err)
    );
  }

  ngOnDestroy(){
    console.log('ngOnDestroy: CartIconComponent destroyed');
    this.subscription.unsubscribe();
  }

}
