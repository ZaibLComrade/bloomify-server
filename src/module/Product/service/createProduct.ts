import {IProduct} from "../product.interface";
import Product from "../product.model";

const createProduct = async (product: IProduct) => {
	return await Product.create(product)
}

export default createProduct;
