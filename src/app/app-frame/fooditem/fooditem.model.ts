export class FoodItem {
    foodId: number;
    // uploaderId: number;
    foodTitle: string;
    foodImagePath: string;
    foodDescription: string;
    // foodPrice: number;
    // foodCategory: string;
    // foodServing: number;
    // foodOrderType: string;
    // isNonVeg: boolean;
    // foodCousine: string;
    // isHomeDelivery: boolean;
    // isTakeAway: boolean;
    // paymentMehotds: string;


    constructor(foodId: number, foodTitle: string, foodDescription: string, foodImagePath: string) {
        this.foodId = foodId;
        this.foodTitle = foodTitle;
        this.foodDescription = foodDescription;
        this.foodImagePath = foodImagePath;
    }
}
