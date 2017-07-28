import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';

export class FoodCartService {
  private foodCartItems: FoodItem[];
  itemsInTheCart = new BehaviorSubject(0);
  
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

  calcAmountPayable() {
    // calculate total amount payble for the items present in foodCartItems Array.
  }

}
