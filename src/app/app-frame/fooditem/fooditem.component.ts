import { Component, OnInit,Input} from '@angular/core';
import {FoodItem} from './fooditem';
import {foodDataService} from '../../services/food-item-service';

//export const selectedFooditem: foodData[]=[];

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})



export class FoodItemComponent implements OnInit {
    
      foodItemcards: FoodItem[];

       constructor(private foodservice: foodDataService) { }
     
       ngOnInit() {
         this.foodItemcards=this.foodservice.getFoodDItem();
        }

}
  






