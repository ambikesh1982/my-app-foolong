import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { AppSidenavComponent } from './app-frame/app-sidenav.component';
import { FoodItemComponent } from './app-frame/fooditem/fooditem.component';
import { AddFoodItem } from './add-fooditem/add-fooditem.component'
import { PhotoUploadComponent } from './add-fooditem/photo-upload/photo-upload.component';
import { SearchComponent } from './search/search.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    AppFrameComponent,
    AppSidenavComponent,
    FoodItemComponent,
    AddFoodItem,
    PhotoUploadComponent,
    SearchComponent,
    FoodCartComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
