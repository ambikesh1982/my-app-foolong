import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import {foodDataService} from '../services/food-item-service';
import {FoodItem} from '../app-frame/fooditem/fooditem';
import {FoodItemComponent} from '../app-frame/fooditem/fooditem.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
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
