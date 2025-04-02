import { SearchQuery } from "../../../@types";
import Product from "../product.model";

export const removeProduct = async (query: SearchQuery) => {
	return await Product.findOneAndDelete(query);
};
