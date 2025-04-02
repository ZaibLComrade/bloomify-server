import Product from "../product.model";
import { IProduct } from "../product.interface";
import { SearchQuery } from "../../../@types";

export const updateProduct = async (query: SearchQuery, product: IProduct) => {
	return await Product.findOneAndUpdate(query, product, { new: true });
};
