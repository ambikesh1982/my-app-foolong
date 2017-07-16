import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';

@Component({
  selector: 'app-detail',
  templateUrl: './fooditem-detail.component.html',
  styleUrls: ['./fooditem-detail.component.css']
})

export class FoodDetailComponent implements OnInit {
  foodItem: FoodItem;
  previousPage: Location;

  constructor(
    private fs: FoodDataService,
    private ar: ActivatedRoute,
    private location: Location) {
    this.previousPage = this.location;
  }

  ngOnInit() {
    this.ar.params
      .switchMap((params: Params) => this.fs.getFoodDItem(+params['id']))
      .subscribe(foodItem => this.foodItem = foodItem);
  }

  onAddToCart() {
    this.fs.addFoodCartItems(this.foodItem);
  }
}
