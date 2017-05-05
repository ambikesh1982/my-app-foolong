import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
    
    tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'white', url: '../../src/resources/images/image-1.jpg'},
    {text: 'Two', cols: 1, rows: 1, color: 'white', url: '../../src/resources/images/image-2.jpg'},
    {text: 'Three', cols: 1, rows: 1, color: 'white', url: '../../src/resources/images/image-3.jpg'},
    {text: 'One', cols: 1, rows: 1, color: 'white', url: '../../src/resources/images/image-1.jpg'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
