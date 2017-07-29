import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodItem } from './fooditem/fooditem.model';
import { FoodDataService } from './fooditem/fooditem.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-frame',
  templateUrl: './app-frame.component.html',
  styleUrls: ['./app-frame.component.css'],
})

export class AppFrameComponent implements OnInit, OnDestroy {
  title = 'Foodz9';
  isLoading = true;
  subscription: Subscription;
  foodItems: FirebaseListObservable<FoodItem[]>;
  constructor(private fs: FoodDataService) { }

  ngOnInit(): void {
    this.foodItems = this.fs.getFoodItemList();
//<<<<<<< HEAD
    
      
      //this.fs.createItem(FOODDATA);
    //  for (var i = 0, len = FOODDATA.length; i < len; i++) {
    //  this.fs.createItem(FOODDATA[i])
//=======
    // Subscribing to FirebaseListObservable to set
    // isLoading = false once we start getting data
    // from Firebase Database. 
    // Subscribe takes 3 arguments in order. 1. Data, 2. Error and 3. Complete
    // FirebaseListObservable never completes as it sets active communication with
    // Firebase database to pull latest changes. So no need for 3rd argument.
    this.subscription = this.foodItems.subscribe(
      () => this.isLoading = false,
      (e) =>console.log(e)
    )
  };

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leak issues.
    this.subscription.unsubscribe();
  }
//>>>>>>> refs/remotes/origin/Dev_Branch

  
  };
  

