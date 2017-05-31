import {FoodItem} from '../app-frame/fooditem/fooditem';

export class foodCartService {

   
    private CartItems: FoodItem;

    onAddtoCart(itemForCart: FoodItem){
       // console.log(itemForCart);
        //this.CartItems.push(itemForCart);
        this.CartItems=itemForCart;
        //console.log(this.CartItems);

    }
    getCartItem(){
        return this.CartItems;
    }

}
