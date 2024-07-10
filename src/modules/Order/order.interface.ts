import {IProduct} from "../Product/product.interface";
import {IUser} from "../User/user.interface";

export interface IOrder {
	customer: IUser;
	product: IProduct;
	quantity: number;
}
