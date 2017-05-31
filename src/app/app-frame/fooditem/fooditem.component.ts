import { Component, Input} from '@angular/core';
import {FoodItem} from './fooditem';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})

export class FoodItemComponent{
  @Input() fooditem:FoodItem;

}
  






