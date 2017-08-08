import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';

@Injectable()

export class FoodCartService {

  // # # # Code Comment  # # #
  // Setting up all the porperties as private.
  // These can not be set from out side of this class.
  // Only getter and setter methods can access or alter the values.
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

  private basePath = '/foodz9Cart';
  private cartItemList: FirebaseListObservable<FoodItem[]>;
  private cartItemObject: FirebaseObjectObservable<FoodItem>;
  private foodCartItems: FoodItem[];
  // private itemsInTheCart = new BehaviorSubject(0);
  public itemsInTheCart$ = new BehaviorSubject(0);
  totalAmountPayable: number = 0;

  constructor(private _fdb: AngularFireDatabase) {
    this.foodCartItems = [];
  }

  getCartItemList(query = {}): FirebaseListObservable<FoodItem[]> {
    this.cartItemList = this._fdb.list(this.basePath, {
      query: query
    });
    return this.cartItemList;
  }

  addToCartList(cartitem: FoodItem) {
    this.cartItemList = this._fdb.list(this.basePath);
    this.cartItemList.push(cartitem);
  }

  deleteCartItem(key: string): void {
    this.cartItemList.remove(key);
  }

  removeAllCartItems() {
    this.cartItemList.remove();
  }

  getCartSize(): Observable<number> {
    return this.itemsInTheCart$.asObservable();
  }
}
