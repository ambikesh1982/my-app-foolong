import { Component, OnInit } from '@angular/core';
import { FoodItem } from './fooditem/fooditem.model';
import { FoodDataService } from './fooditem/fooditem.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.css'],
})

export class AppFrameComponent implements OnInit {
  title = 'Foodz9';
  foodItems: FirebaseListObservable<FoodItem[]>;
  isLoading = false;
  constructor(private fs: FoodDataService) { }

  ngOnInit(): void {
    // this.fs.getFoodDItems().then(foodItems => this.foodItems = foodItems);
    this.foodItems = this.fs.getFoodItemList();
    
      
      //this.fs.createItem(FOODDATA);
    //  for (var i = 0, len = FOODDATA.length; i < len; i++) {
    //  this.fs.createItem(FOODDATA[i])
}
  
  };
  

