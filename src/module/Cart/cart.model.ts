import { Schema, model } from "mongoose";
import {ICart} from "./cart.interface";
import {orderSchema} from "../Order/order.model";

const cartSchema = new Schema<ICart>({
	userId: {
		type: Schema.Types.ObjectId,
		required: [true, "User is required"],
		ref: "User",
	},
	orders: {
		type: [orderSchema],
		default: [],
	}
})

const Cart = model<ICart>("Cart", cartSchema);
export default Cart;
