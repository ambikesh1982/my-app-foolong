import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-food-cart-fab',
  template: `
    <div class="done">
      <a 
        *ngIf="itemsInTheCart === 0; else checkout" 
        routerLink="/app-frame" routerLinkActive="active"
        md-fab><md-icon>add</md-icon>
      </a>
      <ng-template #checkout>
        <a 
          md-fab 
          routerLink="/checkout" 
          routerLinkActive="active">
          <md-icon>check</md-icon>
        </a>
      </ng-template>
    </div>
  `,
})
export class FoodCartFabComponent{

 @Input() itemsInTheCart: number;

 constructor(){
   this.itemsInTheCart = 0;
 }
}
