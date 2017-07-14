import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';

export class FoodCartService {
  
  private foodCartItems: FoodItem[];
  itemsInTheCart:number;

  constructor(){
    this.foodCartItems =[];
    this.itemsInTheCart = 0;
  }
  
  getFoodCartItems(){
   return this.foodCartItems;
  }

  addFoodCartItems(cartitem: FoodItem){
    this.foodCartItems.push(cartitem);
    this.itemsInTheCart = this.foodCartItems.length;
  }
 
  deleteFoodCartItems(cartitem: FoodItem){
    this.foodCartItems.splice(cartitem.foodId,1);
    this.itemsInTheCart=this.itemsInTheCart-1;
  }

}
