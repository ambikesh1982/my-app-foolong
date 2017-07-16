import { Injectable } from '@angular/core';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { FoodCartService } from 'app/food-cart/food-cart.service';

@Injectable()
export class FoodDataService {
  private foodItems: FoodItem[] = [
    new FoodItem(
        11,
        'South Indian Meal',
        'South Indian Thali is a great representation of the complex flavors and spices in Indian food',
        '../../assets/images/sounth.jpeg'),
    new FoodItem(
        12,
        'North Indian Thali',
        'North Indian cuisine (उत्तर भारतीय व्यंजन) is a part of Indian cuisine, from the region of Northern India',
        '../../assets/images/dish.jpg'),
    new FoodItem(
        21,
        'Gujraati Thaali',
        'The typical Gujarati thali consists of rotli, dal or kadhi, rice, and Sabji',
        '../../assets/images/sattvic-food.jpg'),
    new FoodItem(
        22,
        'Pasta',
        'Melted butter in a saucepan with cheese & Milk.The creamy sauce mixed with pene',
        '../../assets/images/pasta.jpg'),
    new FoodItem(
        44,
        'Indian Spices',
        'A Great representation of the complex flavors and spices ',
        '../../assets/images/spices.jpg'),
    new FoodItem(
        67,
        'Jalebi',
        'Its crisp, crunchy, syrupy and juicy sweet snacks.',
        '../../assets/images/Jalebi.jpeg'),
    new FoodItem(
        55,
        'Aloo-Gobhi',
        'Aloo Gobhi is a regular subzi that is cooked in every Indian household',
        '../../assets/images/aloo_gobi.jpg'),
    new FoodItem(
        1,
        'Paneer-Tikka',
        'Indian cottage cheese marinated in yogurt and spice with veggies and grilled in Tandoor',
        '../../assets/images/paneer_tikka.jpeg'),
    new FoodItem(
        73,
        'Pani-Puri',
        'Potato, onion, chickpeas, coriander chutney stuffed crispy puri drenched in sour and spicy mint flavored water',
        '../../assets/images/panipuri.jpg'),
    new FoodItem(
        82,
        'Fried Rice',
        'Fried rice is a dish of cooked rice that has been stir-fried in a wok with eggs & Veggies',
        '../../assets/images/fri-rice.png'),
    new FoodItem(
        43,
        'Grilled Cheese Sandwich',
        'Bread, butter with Cheddar cheese and grilled on pan',
        '../../assets/images/grilledcheese.jpg'),
    new FoodItem(
        37,
        'Chicekn-65',
        'Chicken 65 is a spicy, red, deep fried chicken chunks usually served as snack',
        '../../assets/images/chicken-65.jpg'),
    new FoodItem(
        8,
        'Egg Curry',
        'Indian Egg Curry is an egg recipe made with boiled fried eggs and spices',
        '../../assets/images/egg-curry.jpg')
  ];
  constructor(private fcs: FoodCartService) { }

  getFoodDItems(): Promise<FoodItem[]> {
    return Promise.resolve(this.foodItems);
  }

  getFoodDItem(id: number): Promise<FoodItem> {
    return this.getFoodDItems()
      .then(foodItems => foodItems.find(foodItem => foodItem.foodId === id));
  }

  updateFoddItem(id: number) { }

  deleteFoodItem(id: number) { }

  addFoodCartItems(cartitem: FoodItem) {
    this.fcs.addFoodCartItems(cartitem);
  }
}
