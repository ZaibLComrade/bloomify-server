import {Response} from "express";

type ResponseObject<T> = {
	success: boolean,
	statusCode: number,
	message: string,
	data: T | unknown,
}
const sendResponse = <T>(res: Response, resObj: ResponseObject<T>) => {
	res.status(resObj.statusCode).json(resObj);
}

export default sendResponse;
