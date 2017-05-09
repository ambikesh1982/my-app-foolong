import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
    
    cards = [
    {text: 'One', url: '../../src/assets/images/image-1.jpg'},
    {text: 'Two', url: '../../src/assets/images/image-2.jpg'},
    {text: 'Three', url: '../../src/assets/images/image-3.jpg'},
    {text: 'One', url: '../../src/assets/images/image-1.jpg'},
    {text: 'Two', url: '../../src/assets/images/image-2.jpg'},
    {text: 'Three', url: '../../src/assets/images/image-3.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
