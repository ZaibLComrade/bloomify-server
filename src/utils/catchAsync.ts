import type { NextFunction, Request, Response } from "express";

type AsyncReqHandler = (
	req: Request,
	res: Response,
	next: NextFunction
) => Promise<void>;

// Wraps request handler functions to reduce boilerplate code
const catchAsync = (reqHandler: AsyncReqHandler) => {
	return (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(reqHandler(req, res, next)).catch((err) => {
			next(err);
		});
	};
};

export default catchAsync;
