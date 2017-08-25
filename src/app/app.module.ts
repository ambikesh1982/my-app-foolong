// Angular core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FoodDetailComponent } from './app-frame/fooditem/fooditem-detail/fooditem-detail.component';
import { AddFoodItemComponent } from './add-fooditem/add-fooditem.component';
import { SearchComponent } from './search/search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FoodDataService } from 'app/app-frame/fooditem/fooditem.service';
import { CartIconComponent } from './shared/ui-components/cart-icon.component';
import { NavigateBackComponent } from './shared/ui-components/navigate-back.component';
import { FoodCartComponent } from './food-cart/food-cart.component';
import { FoodCartItemComponent } from './food-cart/food-cart-item.component';
import { FoodCartSummaryComponent } from './food-cart/food-cart-summary.component';
import { FoodCartFabComponent } from './food-cart/food-cart-fab.component';
import { FoodCartService } from './food-cart/food-cart.service';
import { AccountIconComponent } from './shared/ui-components/account-icon.component';
import { SearchIconComponent } from './shared/ui-components/search-icon.component';
import { AuthService } from "app/user-profile/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    AppFrameComponent,
    AppSidenavComponent,
    FoodItemComponent,
    FoodDetailComponent,
    AddFoodItemComponent,
    
    SearchComponent,
    UserProfileComponent,
    CheckoutComponent,
    SearchIconComponent,
    AccountIconComponent,
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
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [
    FoodDataService,
    FoodCartService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
