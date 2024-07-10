import {Types} from "mongoose";
import {IOrder} from "../Order/order.interface";

export interface ICart {
	userId: Types.ObjectId;
	orders: IOrder[];
}
