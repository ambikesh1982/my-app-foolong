import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';

export class FoodCartService {

  // # # # Code Comment  # # #
  // Setting up all the porperties as private.
  // These can not be set from out side of this class.
  // Only getter and setter methods can access or alter the values.
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  private foodCartItems: FoodItem[];
  private itemsInTheCart = new BehaviorSubject(0);
  
  constructor() { this.foodCartItems = []; }

  getCartItems(): FoodItem[] {
    return this.foodCartItems;
  }

  addToCart(cartitem: FoodItem) {
    this.foodCartItems.push(cartitem);
    this.itemsInTheCart.next(this.foodCartItems.length);
  }

  deleteCartItems(cartitemidx: number) {
    this.foodCartItems.splice(cartitemidx, 1);
    this.itemsInTheCart.next(this.foodCartItems.length);
  }

  getCartSize():Observable<number>{
    return this.itemsInTheCart.asObservable();
  }

  calcAmountPayable() {
    // calculate total amount payble for the items present in foodCartItems Array.
  }

}
