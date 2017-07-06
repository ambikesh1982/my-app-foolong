import { Component, Input} from '@angular/core';
import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';


@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})

export class FoodItemComponent{
<<<<<<< HEAD
  @Input() fooditem:FoodItem;
=======
  @Input() appfooditem:FoodItem;

>>>>>>> 7cba42a44af14bfa51069cb51d238901f86a3e3b
}