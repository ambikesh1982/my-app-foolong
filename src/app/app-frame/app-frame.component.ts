import { Component } from '@angular/core';
import { FoodItem } from './fooditem/fooditem';
import { foodDataService } from '../services/food-item-service';


@Component({
  selector: 'app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.css'],
})

export class AppFrameComponent {
  title = 'Foodz9';
  foodItems: FoodItem[];
  constructor(private foodservice: foodDataService) { }

  ngOnInit() {
    this.foodItems=this.foodservice.getFoodDItem();
        }

}
