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

    private basePath = '/foodz9Items_new';
    private foodItemList: FirebaseListObservable<FoodItem[]>;
    private foodItemObject: FirebaseObjectObservable<FoodItem>;
    
    

    constructor(
        private fcs: FoodCartService,
        private fdb: AngularFireDatabase
    ) { }
    public imageDetails :Image; 

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

    saveToFirebaseStorage(inputImage : Image)
    {
        const LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif';
        let storageRef = firebase.storage().ref();
        let uploadImageTask = storageRef.child(`${this.basePath}/${inputImage.name}`).put(inputImage.file);

        uploadImageTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot)=> {
            inputImage.progress  = (snapshot.bytesTransferred/snapshot.totalBytes)*100
            console.log("image progress",inputImage.progress);
        },
        (error) => {
            console.log(error);
        },
        ()=> {
            inputImage.url = uploadImageTask.snapshot.downloadURL;
            inputImage.name = inputImage.file.name;
            this.imageDetails=inputImage;
            console.log("image URL",inputImage.url);
            console.log("image size",inputImage.size);
            console.log("image name",inputImage.name);
            console.log("image date",inputImage.dateCreated);
            //this.saveFileData(inputImage);
        }
        );
    
}


}

  /*const messages = this.db.list('/messages');
      messages.push({
        name: this.currentUser.displayName,
        imageUrl: LOADING_IMAGE_URL,
        photoUrl: this.currentUser.photoURL || PROFILE_PLACEHOLDER_IMAGE_URL
      }).then((data) => {
        // inputImage the image to Cloud Storage.
        const filePath = `${this.currentUser.uid}/${data.key}/${file.name}`;
        return firebase.storage().ref(filePath).put(file)
          .then((snapshot) => {
            // Get the file's Storage URI and update the chat message placeholder.
            const fullPath = snapshot.metadata.fullPath;
            const imageUrl = firebase.storage().ref(fullPath).toString();
            return firebase.storage().refFromURL(imageUrl).getMetadata();
          }).then((metadata) => {
            // TODO: Instead of saving the download URL, save the GCS URI and
            //       dynamically load the download URL when displaying the image
            //       message.
            return data.update({
              imageUrl: metadata.downloadURLs[0]
            });
          });
      }).catch((err) => {
        this.snackBar.open('There was an error inputImageing a file to Cloud Storage.', null, {
          duration: 5000
        });
        console.error(err);
      });*/