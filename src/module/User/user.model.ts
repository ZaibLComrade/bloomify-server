import { Schema, model } from "mongoose";
import {IUser, Address} from "./user.interface";

const addressSchema = new Schema<Address>({
	street: {
		type: String,
		required: false,
	},
	city: {
		type: String,
		required: [true, "City is required"],
	},
	country: {
		type: String,
		required: [true, "Country is required"],
	},
	zip: {
		type: Number,
		required: [true, "Zip/Postal code is required"],
	}
})

export const userSchema = new Schema<IUser>({
	name: { 
		type: String,
		required: [true, "Name is required"],
	},
	phone: {
		type: String,
		required: [true, "Phone number is required"],
	},
	address: addressSchema,
	email: {
		type: String,
		required: [true, "Email is required"],
	}
})

const User = model<IUser>("User", userSchema);
export default User;
