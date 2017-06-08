import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { FoodDetailComponent } from "./app-frame/fooditem/fooditem-detail/fooditem-detail.component";
import { AddFoodItem } from './add-fooditem/add-fooditem.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/app-frame', pathMatch: 'full'},
    { path: 'app-frame', component: AppFrameComponent },
    { path: 'detail/:id', component: FoodDetailComponent },
    { path: 'add-fooditem', component: AddFoodItem },
    { path: 'food-cart', component: FoodCartComponent },
    { path: 'search', component: SearchComponent },
    { path: 'profile', component: UserProfileComponent },

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{}





