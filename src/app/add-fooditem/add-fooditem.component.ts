import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-add-fooditem',
    templateUrl: './add-fooditem.component.html',
    styles: []
})

export class AddFoodItemComponent {
    title = 'Post your food-item.';
    hideatCompletion = { 'display': 'none' };
    index = 0;
    addFoodItemSteps = [
        { stepIndex: 1, stepTitle: 'Post your speciality', stepWeight: 25 },
        { stepIndex: 2, stepTitle: 'Little description helps', stepWeight: 50 },
        { stepIndex: 3, stepTitle: 'Price well and deliver', stepWeight: 75 },
        { stepIndex: 4, stepTitle: 'Location is everyting', stepWeight: 100 },
        { stepIndex: 5, stepTitle: 'Happy cooking!', stepWeight: 100 }
    ];
    constructor(private location: Location) { }

    onClickNext() { this.index = this.index + 1; }

    onClickBack() { this.index = this.index - 1; }
}
