import Product from "../product.model";

const fetchProduct = async (filter = {}) => {
	return await Product.find(filter);
}

export default fetchProduct;
