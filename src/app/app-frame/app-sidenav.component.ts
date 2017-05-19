import {Component, Input, Output} from '@angular/core';

@Component({
    selector:'app-sidenav-list',
    template: `
      <md-nav-list *ngFor="let sidenavMenuItem of sidenavMenuItems">
        <md-list-item>{{sidenavMenuItem.menuName}}</md-list-item>
      </md-nav-list>
    `
})

export class AppSidenavComponent{
    sidenavMenuItems = [
            {menuIcon:'home', menuName:'Home', menuRoute:'./'},
            {menuIcon:'order', menuName:'My Orders', menuRoute:'./'},
            {menuIcon:'card', menuName:'Cart', menuRoute:'./'},
            {menuIcon:'heart', menuName:'Wish List', menuRoute:'./'},
            {menuIcon:'language', menuName:'Language', menuRoute:'./'},
            {menuIcon:'download', menuName:'Download App', menuRoute:'./'},
            {menuIcon:'help', menuName:'Help', menuRoute:'./'},
            {menuIcon:'feedback', menuName:'Feedback', menuRoute:'./'},
            ]
    
}