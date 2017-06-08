import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { foodDataService } from "app/services/food-item-service";
import { FoodItem } from "app/app-frame/fooditem/fooditem";

@Component({
  selector: 'app-detail',
  templateUrl: './fooditem-detail.component.html',
  styleUrls: ['./fooditem-detail.component.css']
})

export class FoodDetailComponent implements OnInit {
  constructor(private foodService: foodDataService,
              private route: ActivatedRoute,
              private location: Location) { }

  @Input() foodItem:FoodItem;
  
  ngOnInit() {
  this.route.params
        .switchMap((params: Params) => this.foodService.getFoodDItem(+params['id']))
        .subscribe(foodItem => this.foodItem = foodItem);
}

  goBack(): void { this.location.back()}
  

}
