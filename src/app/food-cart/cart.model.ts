/*Every user must have empty cart assigned to him. Initially Cart is assigned 
to user-session-id, and all the cart items should be added to this session-id. 
On proceeding to checkout, user must login and session-id will be replaced with 
actual user-id with auth status active.*/
 
import { FoodItem } from "app/app-frame/fooditem/fooditem.model";

export class Cart {
    _userId: string; //If auth is false, assign _session_id.
    status: string; //intilized value = active. other values could be expired and complete.
    quantity: number;
    amtPayable: number; 
    cartItems: FoodItem[];

    // using new Cart(_user_session_id) will initialize the cart with below mentioned values.
    constructor( _userId: string ) { 
            this._userId = _userId;
            this.status = 'active';
            this.quantity = 0;
            this.amtPayable = 0.0;
            this.cartItems = [];
    }
 }
