import { Component } from '@angular/core';
import { Location } from '@angular/common'

@Component({
    selector:'add-fooditem',
    templateUrl: './add-fooditem.component.html',
    styles:[]
})

export class AddFoodItem{
    title='Post your food-item.';
    index:number=0;
    constructor(private location: Location){}

    addFoodItemSteps=[
        { stepIndex:1, stepTitle:'Post your speciality', stepWeight:25},
        { stepIndex:2, stepTitle:'Little description helps', stepWeight:50},
        { stepIndex:3, stepTitle:'Price well and deliver', stepWeight:75},
        { stepIndex:4, stepTitle:'Location is everyting', stepWeight:100},
        { stepIndex:5, stepTitle:'Happy cooking!', stepWeight:100}
    ]

    hideatCompletion={ 'display':'none' }

    onClickNext(){ this.index=this.index+1; }
    
    onClickBack(){ this.index=this.index-1; }
}
