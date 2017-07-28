import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-detail',
  templateUrl: './fooditem-detail.component.html',
  styleUrls: ['./fooditem-detail.component.css']
})

export class FoodDetailComponent implements OnInit {
  foodItem: FoodItem;
  previousPage: Location;
  fi: FirebaseObjectObservable<FoodItem>;
  subscription: Subscription;

  constructor(
    private fs: FoodDataService,
    private ar: ActivatedRoute,
    private location: Location) {
    this.previousPage = this.location;
  }

  ngOnInit(): void {
    // Uses Angular router's Params observable to get rout parameters.
    // foodItem in subscribe is the foodItem returned by getFoodItem function. 
    this.subscription = this.ar.params
      .switchMap((params: Params) => this.fs.getFoodItem(params['id']))
      .subscribe(foodItem => this.foodItem = foodItem);
  }

  onAddToCart(): void {
    this.fs.addToFoodCart(this.foodItem);
  }

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leak issues.
    this.subscription.unsubscribe();
  }
}
