import {ICategory} from "../Category/category.interface";

export interface IProduct {
	title: string;
	image: string;
	category: ICategory; 
	price: number;
	description: string;
	rating: number;
	inventory: {
		inStock: boolean;
		quantity: number;
	}
	meta?: {
		[key: string]: unknown;
	};
}
