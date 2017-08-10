import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { Cart } from "app/food-cart/cart.model";
import { AuthService } from "app/user-profile/auth.service";

@Injectable()

export class FoodCartService {

  // # # # Code Comment  # # #
  // Setting up all the porperties as private.
  // These can not be set from out side of this class.
  // Only getter and setter methods can access or alter the values.
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  public itemsInTheCart$ = new BehaviorSubject(0);
  private cartItemList$: FirebaseListObservable<FoodItem[]>;
  private cartObject$: FirebaseListObservable<Cart[]>;
  private item$: FirebaseObjectObservable<FoodItem>;
  private foodCartItems: FoodItem[];
  private basePath = '/foodz9Cart';
  private basePathItem: string;
  public UID: string = null;
  private CARTKEY: string = null;

  constructor(
    private _fdb: AngularFireDatabase,
    private _auth: AuthService
  ) {
    this.foodCartItems = [];
    this._auth.getAuthState().subscribe(
      (user)=> {
        if(user){
          this.UID = user.uid;
        } else {
          this.UID = null;
        }
      },
      (e) => console.log("Error from fcs",e),
    )
  }

  initializeAppCart(uid: string){
    this.cartObject$ = this._fdb.list(this.basePath);
    this.CARTKEY = this.cartObject$.push(new Cart(uid)).key;
    this.basePathItem = `/foodz9Cart/${this.CARTKEY}/cartitems/`;
  }

  getCartItemList(query = {}): FirebaseListObservable<FoodItem[]> {
    this.cartItemList$ = this._fdb.list(this.basePathItem, {
      query: query
    });
    return this.cartItemList$;
  }

 addToCartList(cartitem: FoodItem) {
    this.cartItemList$ = this._fdb.list(this.basePathItem);
    this.cartItemList$.push(cartitem);
  }

  deleteCartItem(key: string): void {
    this.cartItemList$.remove(key);
  }

  removeAllCartItems() {
    this.cartItemList$.remove();
  }

  getCartSize(): Observable<number> {
    return this.itemsInTheCart$.asObservable();
  }
}
