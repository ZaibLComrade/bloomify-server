import Product from "../product.model";

export const fetchProduct = async (filter = {}) => {
	return await Product.find(filter);
}
