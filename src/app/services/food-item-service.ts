import { Injectable } from '@angular/core';
import {FOOD_ARR} from '../food-data/food-item-data';
import {foodData} from '../app-frame/fooditem/fooditem';

@Injectable()

export class foodDataService {
   /* getFoodDetail(): Promise<foodData[]> {
        return Promise.resolve(FOOD_ARR);}*/
    
    getFoodDetail():foodData[]{
        return FOOD_ARR;
    }
    
}
