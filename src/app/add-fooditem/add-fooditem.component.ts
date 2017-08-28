import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { FoodItem } from "app/app-frame/fooditem/fooditem.model";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Image } from "app/add-fooditem/image.model";
import { FoodDataService } from "app/app-frame/fooditem/fooditem.service";
import { MdSnackBar } from '@angular/material';
import { AuthService } from "app/user-profile/auth.service";



@Component({
    selector: 'app-add-fooditem',
    templateUrl: './add-fooditem.component.html',
    styles: []
})

export class AddFoodItemComponent implements OnInit {
    title = 'Post your food-item.';
    hideatCompletion = { 'display': 'none' };
    index = 0;
    addFoodItemSteps = [
        { stepIndex: 1, stepTitle: 'Post your speciality', stepWeight: 25 },
        { stepIndex: 2, stepTitle: 'Little description helps', stepWeight: 50 },
        { stepIndex: 3, stepTitle: 'Price well and deliver', stepWeight: 75 },
        { stepIndex: 4, stepTitle: 'Location is everyting', stepWeight: 100 },
        { stepIndex: 5, stepTitle: 'Happy cooking!', stepWeight: 100 }
    ];

    addFoodItemFormGroup: FormGroup;
    FoodCategory = ['Vegan', 'Veg', 'Non-Veg'];
    newFoodItem: FoodItem;
    FoodItemList$: FirebaseListObservable<any>;
    private basePath = '/foodz9Items_new';

    private selectedFiles: File;
    private selectedFileUpload: Image;
    private uploadedURL: string;


    constructor(public location: Location,
        private fb: FormBuilder,
        private fdb: AngularFireDatabase,
        private foodService: FoodDataService,
        private snackBar: MdSnackBar,
        private authService: AuthService) {
        this.buildForm();
    }

    onClickNext() {
        this.index = this.index + 1;
       // this.onSubmitForm1(form);
    }

    onSubmitForm1(form1) {
        this.newFoodItem = form1;
        console.log(this.newFoodItem.foodTitle);
        console.log(this.newFoodItem.foodPrice);
        console.log(this.newFoodItem.foodDescription);
        console.log(this.newFoodItem.foodCuisine);
        console.log(this.newFoodItem.foodServing);

         }

    onClickBack() { this.index = this.index - 1; }

    private buildForm() {
        this.addFoodItemFormGroup = this.fb.group({
            foodTitle: ['', Validators.required],
            foodDescription: '',
            //foodCategory:    ['', Validators.required ],
            //isNonVeg:    'Veg',
            foodCuisine: '',
            foodPrice: ['', Validators.required],
            foodServing: ['', Validators.required],
            imageURL1: ''


        });
    }
/*
    selectFileToUpload(event: any) {
        event.preventDefault();
        this.selectedFiles = event.target.files[0];

        // Clear the selection in the file picker input.
        const imageForm = <HTMLFormElement>document.getElementById('image-form');
        imageForm.reset();

        // Checking if the selected file is an image.
        if (!this.selectedFiles.type.match('image.*')) {
            this.snackBar.open('You can only share images', null, {
                duration: 10000
            });
            return;
        }
        console.log("filename-", this.selectedFiles);

    }*/

    uploadSingleFileToStorage(event: any) {
         event.preventDefault();
        this.selectedFiles = event.target.files[0];

        // Clear the selection in the file picker input.
        const imageForm = <HTMLFormElement>document.getElementById('image-form');
        imageForm.reset();

        // Checking if the selected file is an image.
        if (!this.selectedFiles.type.match('image.*')) {
            this.snackBar.open('You can only share images', null, {
                duration: 10000
            });
            return;
        }
        console.log("filename-", this.selectedFiles);

        let file = this.selectedFiles;
        this.selectedFileUpload = new Image(file);
        if (this.authService.checkSignedIn()) {
            this.foodService.saveToFirebaseStorage(this.selectedFileUpload);
            
           
        }
    }


    onFormSubmit(postitem) {
        this.newFoodItem = postitem;
        this.newFoodItem.foodImageURL=this.foodService.imageDetails;
        console.log(this.newFoodItem);
        this.FoodItemList$ = this.fdb.list(this.basePath);
        this.FoodItemList$.push(this.newFoodItem);
        this.addFoodItemFormGroup.reset();
    }

    ngOnInit() { }


}
