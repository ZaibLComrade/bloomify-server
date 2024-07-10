import {IOrder} from "../Order/order.interface";

export interface ICart {
	userId: string;
	orders: IOrder[];
}
