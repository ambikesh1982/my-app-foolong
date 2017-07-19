import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { Subject } from 'rxjs/Subject';

export class FoodCartService {

  CartItemDelete = new Subject<FoodItem[]>();
  private foodCartItems: FoodItem[];
  private itemsInTheCart: number;

  constructor() {
    this.foodCartItems = [];
    this.itemsInTheCart = this.foodCartItems.length;
  }

  getFoodCartItemCount(): number {
    return this.foodCartItems.length;
  }

  getFoodCartItems(): FoodItem[] {
    return this.foodCartItems;
  }

  addFoodCartItems(cartitem: FoodItem) {
    this.foodCartItems.push(cartitem);
    this.itemsInTheCart = this.foodCartItems.length;
  }

  deleteFoodCartItems(cartitemidx: number) {
    console.log(cartitemidx);
    this.foodCartItems.splice(cartitemidx, 1);
    this.itemsInTheCart = this.foodCartItems.length;
  }

  calcAmountPayable() {
    // calculate total amount payble for the items present in foodCartItems Array.
  }

}
