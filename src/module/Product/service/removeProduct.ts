import { SearchQuery } from "../../../@types";
import Product from "../product.model";

const removeProduct = async (query: SearchQuery) => {
	return await Product.findOneAndDelete(query);
};

export default removeProduct;
