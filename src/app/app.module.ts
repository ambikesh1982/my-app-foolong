import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { AppSidenavComponent } from './app-frame/app-sidenav.component';
import { FoodItemComponent } from './app-frame/fooditem/fooditem.component';
import { AddFoodItem } from './add-fooditem/add-fooditem.component'
import { PhotoUploadComponent } from './add-fooditem/photo-upload/photo-upload.component';
import { SearchComponent } from './search/search.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { foodDataService } from './services/food-item-service';
import { foodCartService } from './services/food-cart-service';




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
    UserProfileComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [foodDataService,
             foodCartService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
