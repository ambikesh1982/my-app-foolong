export class FoodItem{
    foodId: number;
    uploaderId: number;
    foodImagePath: string;
    foodTitle: string;
    foodDescription: string;
    foodPrice: number;
    foodCategory: string;
    foodServing: number;
    foodOrderType: string;
    isNonVeg: boolean;
    foodCousine: string;
    isHomeDelivery: boolean;
    isTakeAway: boolean;
    paymentMehotds: string;


    constructor ( foodTitle: string,foodDescription: string,foodImagePath: string)
    {
        this.foodTitle=foodTitle;
        this.foodDescription=foodDescription;
        this.foodImagePath=foodImagePath;
    }
}
