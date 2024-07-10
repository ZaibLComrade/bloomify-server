import { Schema, model } from "mongoose";
import {IOrder} from "./order.interface";
import {userSchema} from "../User/user.model";
import {productSchema} from "../Product/product.model";

export const orderSchema = new Schema<IOrder>({
	customer: userSchema,
	product: productSchema,
	quantity: {
		type: Number,
		default: 1,
	}
})

const Order = model<IOrder>("Order", orderSchema);
export default Order;
