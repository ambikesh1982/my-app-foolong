import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
    
 /*   cards = [
    {text: 'One', url: '../../src/assets/images/image-1.jpg'},
    {text: 'Two', url: '../../src/assets/images/image-2.jpg'},
    {text: 'Three', url: '../../src/assets/images/image-3.jpg'},
    {text: 'One', url: '../../src/assets/images/image-1.jpg'},
    {text: 'Two', url: '../../src/assets/images/image-2.jpg'},
    {text: 'Three', url: '../../src/assets/images/image-3.jpg'},
  ];*/
  cards=[{text:'South Indian Meal',desc:'South Indian Thali is a great representation of the complex flavors and spices in Indian food',url:'../../assets/sounth.jpeg'},
          {text:'North Indian Thali',desc:'North Indian cuisine (उत्तर भारतीय व्यंजन) is a part of Indian cuisine, from the region of Northern India',url:'../../assets/dish.jpg'},
          {text:'Gujraati Thaali',desc:'The typical Gujarati thali consists of rotli, dal or kadhi, rice, and Sabji',url:'../../assets/sattvic-food.jpg'},
          {text:'Pasta',desc: 'Melted butter in a saucepan with cheese & Milk.The creamy sauce mixed with pene',url:'../../assets/pasta.jpg'},
          {text:'Indian Spices',desc:'A Great representation of the complex flavors and spices ',url:'../../assets/spices.jpg'},
          {text:'Jalebi',desc:'Its crisp, crunchy, syrupy and juicy sweet snacks',url:'../../assets/Jalebi.jpeg'},
          {text:'Aloo-Gobhi',desc:' Aloo Gobhi is a regular subzi that is cooked in every Indian household',url:'../../assets/aloo_gobi.jpg'},
          {text:'Paneer-Tikka',desc:'Indian cottage cheese marinated in yogurt and spice with veggies and grilled in Tandoor',url:'../../assets/paneer_tikka.jpeg'},
          {text:'Pani-Puri',desc:'Potato, onion, chickpeas, coriander chutney stuffed crispy puri drenched in sour and spicy mint flavored water',url:'../../assets/panipuri.jpg'},
          {text:'Fried Rice',desc:'Fried rice is a dish of cooked rice that has been stir-fried in a wok with eggs & Veggies',url:'../../assets/fri-rice.png'},
          {text:'Grilled Cheese Sandwich',desc:'Bread, butter with Cheddar cheese and grilled on pan',url:'../../assets/grilledcheese.jpg'},
          {text:'Chicekn-65',desc:'Chicken 65 is a spicy, red, deep fried chicken chunks usually served as snack',url:'../../assets/chicken-65.jpg'},
          {text:'Egg Curry',desc:'Indian Egg Curry is an egg recipe made with boiled fried eggs and spices',url:'../../assets/egg-curry.jpg'}
     ];

  constructor() { }

  ngOnInit() {
  }

}
