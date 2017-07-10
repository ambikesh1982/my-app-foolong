import { Component, Input } from "@angular/core";
import { Location } from '@angular/common';


@Component({
    selector: 'app-nav-back',
    template: `
        <div>
            <button md-icon-button (click)="location.back()">
                <md-icon>arrow_back</md-icon>
            </button>
        </div>`
})
export class NavigateBackComponent{
@Input() location: Location;
}