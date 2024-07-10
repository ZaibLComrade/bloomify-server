import { Schema, model } from "mongoose";
import {ICategory} from "./category.interface";

export const categorySchema = new Schema<ICategory>({
	key: {
		type: String,
		required: [true, "Category key is required"],
	},
	name: {
		type: String,
		required: [true, "Category name is required"],
	}
})

const Category = model<ICategory>("Category", categorySchema);
export default Category;
