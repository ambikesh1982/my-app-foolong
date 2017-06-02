import { Component, OnInit,Input} from '@angular/core';
import {FoodItem} from './fooditem';
import {foodDataService} from '../../services/food-item-service';
import {foodCartService} from '../../services/food-cart-service';
import * as firebase from 'firebase/app';

//export const selectedFooditem: foodData[]=[];

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})



export class FoodItemComponent implements OnInit {
    
      foodItemcards: FoodItem[];
      fooditemselected: FoodItem;

       constructor(private foodservice: foodDataService,
                  private cartservice: foodCartService)
                 { }
       
     
        onSelectFooditem(fooditemselected: FoodItem){
          this.foodservice.onAddtoCheckout(fooditemselected);

       }

       onAddtoCart(addItemToCart: FoodItem){
          this.cartservice.onAddtoCart(addItemToCart);

       }
       
       ngOnInit() {
         this.foodItemcards=this.foodservice.getFoodDItem();
        }
      
}
  






