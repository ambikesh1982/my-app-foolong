import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import {FoodItem} from '../fooditem/fooditem';

@Component({
  selector: 'app-single-food-item',
  templateUrl: './single-food-item.component.html',
  styleUrls: ['./single-food-item.component.css']
})
export class SingleFoodItemComponent implements OnInit {
  @Input () singleFoodItem : FoodItem;
  @Output() SelectedFoodItem = new EventEmitter <void>();
  constructor() { }
  oncheckoutFooditem(){
    this.SelectedFoodItem.emit();
  }
  ngOnInit() {
  }

}
