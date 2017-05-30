import { Injectable ,EventEmitter,Output} from '@angular/core';
import {FoodItem} from '../app-frame/fooditem/fooditem';

@Injectable()

export class foodDataService {

   @Output() fooditemSelected = new EventEmitter<FoodItem>();
   checkoutItem: FoodItem;

     private foodItemcards: FoodItem[]=[
          new FoodItem('South Indian Meal','South Indian Thali is a great representation of the complex flavors and spices in Indian food','../../assets/images/sounth.jpeg'),
          new FoodItem('North Indian Thali','North Indian cuisine (उत्तर भारतीय व्यंजन) is a part of Indian cuisine, from the region of Northern India','../../assets/images/dish.jpg'),
          new FoodItem('Gujraati Thaali','The typical Gujarati thali consists of rotli, dal or kadhi, rice, and Sabji','../../assets/images/sattvic-food.jpg'),
          new FoodItem('Pasta', 'Melted butter in a saucepan with cheese & Milk.The creamy sauce mixed with pene','../../assets/images/pasta.jpg'),
          new FoodItem('Indian Spices','A Great representation of the complex flavors and spices ','../../assets/images/spices.jpg'),
          new FoodItem('Jalebi','Its crisp, crunchy, syrupy and juicy sweet snacks','../../assets/images/Jalebi.jpeg'),
          new FoodItem('Aloo-Gobhi',' Aloo Gobhi is a regular subzi that is cooked in every Indian household','../../assets/images/aloo_gobi.jpg'),
          new FoodItem('Paneer-Tikka','Indian cottage cheese marinated in yogurt and spice with veggies and grilled in Tandoor','../../assets/images/paneer_tikka.jpeg'),
          new FoodItem('Pani-Puri','Potato, onion, chickpeas, coriander chutney stuffed crispy puri drenched in sour and spicy mint flavored water','../../assets/images/panipuri.jpg'),
          new FoodItem('Fried Rice','Fried rice is a dish of cooked rice that has been stir-fried in a wok with eggs & Veggies','../../assets/images/fri-rice.png'),
          new FoodItem('Grilled Cheese Sandwich','Bread, butter with Cheddar cheese and grilled on pan','../../assets/images/grilledcheese.jpg'),
          new FoodItem('Chicekn-65','Chicken 65 is a spicy, red, deep fried chicken chunks usually served as snack','../../assets/images/chicken-65.jpg'),
          new FoodItem('Egg Curry','Indian Egg Curry is an egg recipe made with boiled fried eggs and spices','../../assets/images/egg-curry.jpg')
     ];
   /* getFoodDetail(): Promise<foodData[]> {
        return Promise.resolve(FOOD_ARR);}*/

    
   getFoodDItem(){
        return this.foodItemcards.slice();
    }

    onAddtoCheckout(itemToDisplay: FoodItem){
        this.checkoutItem=itemToDisplay;
    }
    getCheckoutItem(){
      return this.checkoutItem;
    }
}
