// Angular core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// firebase configurations
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

// Application components
import { AppComponent } from './app.component';
import { AppFrameComponent } from './app-frame/app-frame.component';
import { AppSidenavComponent } from './app-frame/app-sidenav.component';
import { FoodItemComponent } from './app-frame/fooditem/fooditem.component';
import { FoodDetailComponent } from "./app-frame/fooditem/fooditem-detail/fooditem-detail.component";
import { AddFoodItem } from './add-fooditem/add-fooditem.component'
import { PhotoUploadComponent } from './add-fooditem/photo-upload/photo-upload.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { CartIconComponent } from './shared/ui-components/cart-icon.component';
import { NavigateBackComponent } from "app/shared/ui-components/navigate-back.component";
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodCartItemComponent } from './food-cart/food-cart-item.component';
import { FoodCartSummaryComponent } from './food-cart/food-cart-summary.component';
import { FoodCartFabComponent } from "./food-cart/food-cart-fab.component";
import { FoodCartService } from "app/food-cart/food-cart.service";

@NgModule({
  declarations: [
    AppComponent,
    AppFrameComponent,
    AppSidenavComponent,
    FoodItemComponent,
    FoodDetailComponent,
    AddFoodItem,
    PhotoUploadComponent,
    SearchComponent,
    UserProfileComponent,
    CheckoutComponent,
    CartIconComponent,
    NavigateBackComponent,
    FoodCartComponent,
    FoodCartItemComponent,
    FoodCartSummaryComponent,
    FoodCartFabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FoodDataService,
    FoodCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
