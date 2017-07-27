export class FoodItem {
    constructor(
        public foodId: number,
        public foodTitle: string,
        public foodDescription: string,
        public foodCategory: string,
        public isNonVeg: boolean,
        public foodCuisine: string,
        public foodPrice: number,
        public foodServing: number,
        public foodImageURL: string) { }
}
