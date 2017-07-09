import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  encapsulation: ViewEncapsulation.None
})



export class AppComponent {
  title = 'Foodz9';
  fabicon='add';
  onFabClick():void{
    this.fabicon='camera';
  }

  
}
