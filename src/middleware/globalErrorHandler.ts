import {Request, Response, NextFunction} from "express";

const globalErrorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
	res.json(err)
	next();
}

export default globalErrorHandler;
