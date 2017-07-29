import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { FoodCartService } from 'app/food-cart/food-cart.service';

@Injectable()
export class FoodDataService {

  // # # # Code Comment  # # #
  // Setting up all the porperties as private.
  // These can not be set from out side of this class.
  // Only getter and setter methods can access or alter the values.
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

    private basePath = '/foodz9Items';
    private foodItemList: FirebaseListObservable<FoodItem[]>;
    private foodItemObject: FirebaseObjectObservable<FoodItem>;

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

    getFoodItem(key: string): FirebaseObjectObservable<FoodItem> {
        // Uses Firebase db generated key to pull single food item as object.
        const foodItemPath = `${this.basePath}/${key}`;
        this.foodItemObject = this.fdb.object(foodItemPath);
        return this.foodItemObject;
    }

    updateFoddItem(id: number) { 
        // Only for logged-in user.
        // He can update his own posts only.
    }

    deleteFoodItem(id: number) {
        // Only for logged-in user.
        // He can delete his own posts only.
     }

    addToFoodCart(cartitem: FoodItem) {
        this.fcs.addToCart(cartitem);
    }

    createItem(fd: FoodItem) {
        this.foodItemList.push(fd);
    }


}
