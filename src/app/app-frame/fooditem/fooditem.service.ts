import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { FoodCartService } from 'app/food-cart/food-cart.service';

@Injectable()
export class FoodDataService {
    private basePath = '/foodz9Items';
    foodItemList: FirebaseListObservable<FoodItem[]>;
    foodItemObject: FirebaseObjectObservable<FoodItem>;

    constructor(
        private fcs: FoodCartService,
        private fdb: AngularFireDatabase
    ) { }

    getFoodItemList(query = {}): FirebaseListObservable<FoodItem[]> {
        this.foodItemList = this.fdb.list(this.basePath, {
            query: query
        });
        return this.foodItemList;
    }

    //   getFoodDItems(): Promise<FoodItem[]> {
    //     return Promise.resolve(this.foodItems);
    //   }
    getFoodItem(key: string): FirebaseObjectObservable<FoodItem> {
        const foodItemPath = `${this.basePath}/${key}`;
        this.foodItemObject = this.fdb.object(foodItemPath);
        return this.foodItemObject;
    }


    //   getFoodDItem(id: number): Promise<FoodItem> {
    //     return this.getFoodDItems()
    //       .then(foodItems => foodItems.find(foodItem => foodItem.foodId === id));
    //   }

    updateFoddItem(id: number) { }

    deleteFoodItem(id: number) { }

    addFoodCartItems(cartitem: FoodItem) {
        this.fcs.addFoodCartItems(cartitem);
    }

    createItem(fd: FoodItem) {
        this.foodItemList.push(fd);
    }


}
