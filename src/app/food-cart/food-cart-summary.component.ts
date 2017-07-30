import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-food-cart-summary',
  template: `
    <div class="summary">
        <md-list>
            <md-list-item md-header>Cart Summary: ({{itemsInTheCart}}) Items</md-list-item>
            <md-list-item>Amount Payable: *INR {{amountPayable}}</md-list-item>
        </md-list>
    </div>
  `,
  styles: [`
    .summary{
        position:fixed; 
        bottom:0px;
        left:0%;
        width:100%; 
        margin-right:10px; 
        background-color:#F5F5F5;
    }
  `]
})
export class FoodCartSummaryComponent implements OnInit {
  @Input() itemsInTheCart: number;
  @Input() amountPayable: number;
  constructor() { }

  ngOnInit() {
    
  }

}
