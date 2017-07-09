import { Component, Input } from '@angular/core';

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
      position:relative;
      vertical-align: super;
      font-size:medium;
      color:red;
      margin-left:0;
    }
  `]
})
export class CartIconComponent {
  @Input() itemsInTheCart:number;
  constructor() { }

  ngOnInit() {
  }

}
