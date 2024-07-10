import { Schema, model } from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new Schema<IProduct>({
	title: {
		type: String,
		required: [true, "Product title is requried"],
	},
	image: {
		type: String,
		requried: [true, "Image link is required"],
	},
	category: {},
	price: {
		type: Number,
		required: [true, "Product price is required"],
	},
	description: {
		type: String,
		required: [true, "Product description is required"],
	},
	rating: {
		type: Number,
		default: 0,
	},
	inventory: {
		inStock: {
			type: Boolean,
			default: false,
		},
		quantity: {
			type: Number,
			default: 0,
		},
	},
	meta: {
		type: Object,
		default: {},
	},
});

const Product = model<IProduct>("Product", productSchema);
export default Product;
