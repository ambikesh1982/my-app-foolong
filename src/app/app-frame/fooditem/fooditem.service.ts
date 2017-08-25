import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule, FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule} from 'angularfire2';
import * as firebase from 'firebase';

import { FoodItem } from 'app/app-frame/fooditem/fooditem.model';
import { FoodCartService } from 'app/food-cart/food-cart.service';
import { Image } from "app/add-fooditem/image.model";

@Injectable()
export class FoodDataService {

  // # # # Code Comment  # # #
  // Setting up all the porperties as private.
  // These can not be set from out side of this class.
  // Only getter and setter methods can access or alter the values.
  // # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #

    private basePath = '/foodz9Items';
    private foodItemList: FirebaseListObservable<FoodItem[]>;
    private foodItemObject: FirebaseObjectObservable<FoodItem>;
    

    constructor(
        private fcs: FoodCartService,
        private fdb: AngularFireDatabase
    ) { }

    getFoodItemList(query = {}): FirebaseListObservable<FoodItem[]> {
        this.foodItemList = this.fdb.list(this.basePath, {
            query: query
        });
        return this.foodItemList;
    }

    getFoodItem(key: string): FirebaseObjectObservable<FoodItem> {
        // Uses Firebase db generated key to pull single food item as object.
        const foodItemPath = `${this.basePath}/${key}`;
        this.foodItemObject = this.fdb.object(foodItemPath);
        return this.foodItemObject;
    }

    updateFoddItem(id: number) { 
        // Only for logged-in user.
        // He can update his own posts only.
    }

    deleteFoodItem(id: number) {
        // Only for logged-in user.
        // He can delete his own posts only.
     }

    addToFoodCart(cartitem: FoodItem) {
        // this.fcs.addToCart(cartitem);
        this.fcs.addToCartList(cartitem);
    }

    preparePost(image: Image)
    {

        
    }
    createItem(fd: FoodItem) {
        this.foodItemList.push(fd);
    }

    pushUpload(upload : Image)
    {
        let storageRef = firebase.storage().ref();
        let uploadTask = storageRef.child(`${this.basePath}/${upload}`).put(upload.file);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot)=> {
            upload.progress  = (snapshot.bytesTransferred/snapshot.totalBytes)*100
        },
        (error) => {
            console.log(error);
        },
        ()=> {
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;

            //this.saveFileData(upload);
        }
        );
    
}


}
