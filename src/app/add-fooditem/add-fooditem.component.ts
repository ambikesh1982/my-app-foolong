import { Component } from '@angular/core';

@Component({
    selector:'add-fooditem',
    templateUrl: './add-fooditem.component.html',
    styles:[]
})

export class AddFoodItem{
    title='Post your food-item.';
    toggleStatus = true;
    progressweight=20;
    foodCategory=[
    {value: 'starter-0', viewValue: 'Starter'},
    {value: 'main-course-1', viewValue: 'Main Course'},
    {value: 'dessert-2', viewValue: 'Dessert'}
    ]
    slideToggle='Vegitarian';
    onSlide():void{
        this.toggleStatus=!this.toggleStatus;
        if(this.toggleStatus){
            this.slideToggle='Vegetarian'
        } else {this.slideToggle='Non-Vegetarian'}
    }
}