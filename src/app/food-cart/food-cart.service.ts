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
  public itemsInTheCart = new BehaviorSubject(0);
  
  constructor( private fdb: AngularFireDatabase ) 
  { 
    this.foodCartItems = []; 
  }

  // getCartItemsList(query = {}): FirebaseListObservable<FoodItem[]> {
  //   this.cartItemList = this.fdb.list(this.basePath,{
  //     query: query
  //   });
  //   return this.cartItemList;
  // }

  // getCartItems(): FoodItem[] {
  //   return this.foodCartItems;
  // }

  // addToCart(cartitem: FoodItem) {
  //   this.foodCartItems.push(cartitem);
  //   this.itemsInTheCart.next(this.foodCartItems.length);
  // }

  getCartItemList(query = {}): FirebaseListObservable<FoodItem[]> {
        this.cartItemList = this.fdb.list(this.basePath, {
            query: query
        });
        return this.cartItemList;
    }

  addToCartList(cartitem: FoodItem) {
    this.cartItemList = this.fdb.list(this.basePath);
    this.cartItemList.push(cartitem);
    // this.itemsInTheCart.next(this.foodCartItems.length);
  }

  deleteCartItem(key: string): void {
    this.cartItemList.remove(key);
    // this.itemsInTheCart.next(this.foodCartItems.length);
  }

  // deleteCartItems(cartitemidx: number) {
  //   this.foodCartItems.splice(cartitemidx, 1);
  //   this.itemsInTheCart.next(this.foodCartItems.length);
  // }
  removeAllCartItems(){
    this.cartItemList.remove();
    // this.itemsInTheCart.next(this.foodCartItems.length);

  }

  getCartSize():Observable<number>{
    return this.itemsInTheCart.asObservable();
  }

  calcAmountPayable() {
   
    // calculate total amount payble for the items present in foodCartItems Array.

     let totalAmountPayable :number =0;

    for(var i in this.foodCartItems) 
    {  totalAmountPayable += this.foodCartItems[i].foodPrice; }
    return totalAmountPayable;
  }


  /*
  calcAmountPayable() :Observable<number>{
    let total;
    // calculate total amount payble for the items present in foodCartItems Array.
    for(var i in this.foodCartItems) 
    { total = total+this.foodCartItems[i].foodPrice; 
      //console.log("Sum==",totalAmountPayable);
    }
    return this.totalAmountPayable=total;
    //this.foodCartItems
  }*/


}
