import { Component } from '@angular/core';
import { FoodItem } from './fooditem/fooditem.model';
import { FoodDataService } from './fooditem/fooditem.service';


@Component({
  selector: 'app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.css'],
})

export class AppFrameComponent {
  title = 'Foodz9';
  foodItems: FoodItem[];
  constructor(private foodservice: FoodDataService) { }

 ngOnInit():void{
        this.foodservice.getFoodDItems().then(foodItems => this.foodItems=foodItems);
    };
}
