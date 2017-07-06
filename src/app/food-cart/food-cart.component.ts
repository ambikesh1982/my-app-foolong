import { Component, OnInit } from '@angular/core';

import {FoodItem} from '../app-frame/fooditem/fooditem.model';
import { FoodDataService } from "app/app-frame/fooditem/fooditem.service";

@Component({
  selector: 'app-food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

 foodCartItems:FoodItem[]=[];

constructor(private fs: FoodDataService) { }
  
  ngOnInit() {
    this.foodCartItems=this.fs.getFoodCartItems();
  }

}
