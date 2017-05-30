import { Component, OnInit } from '@angular/core';
import {foodDataService} from '../services/food-item-service';
import {FoodItem} from '../app-frame/fooditem/fooditem';
import {FoodItemComponent} from '../app-frame/fooditem/fooditem.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

constructor(private fooddataService: foodDataService) { }
  
  ngOnInit() {
  
  }
  

}
