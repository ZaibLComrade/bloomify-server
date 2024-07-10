export interface Address {
	street?: string;
	city: string;
	country: string;
	zip: number;
}

export interface IUser {
	name: string;
	phone: string;
	address: Address;
	email: string;
}
