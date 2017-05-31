import { Component, OnInit } from '@angular/core';
import {FoodItem} from '../app-frame/fooditem/fooditem';
import {foodCartService} from '../services/food-cart-service';



@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

 ItemforCart:FoodItem;

constructor(private cartService: foodCartService) { }
  
  ngOnInit() {
  this.ItemforCart=this.cartService.getCartItem();
  }

}
