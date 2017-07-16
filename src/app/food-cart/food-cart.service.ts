import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';

export class FoodCartService {

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

  deleteFoodCartItems(cartitem: FoodItem) {
    this.foodCartItems.splice(cartitem.foodId, 1);
    this.itemsInTheCart = this.foodCartItems.length;
  }

  calcAmountPayable() {
    // calculate total amount payble for the items present in foodCartItems Array.
  }

}
