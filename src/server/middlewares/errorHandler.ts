import {Request, Response, NextFunction} from 'express';

/** Error handling middleware */
export const errorHandler = (error: string, req: Request, res: Response, next: NextFunction) => {
	console.error(req, error);
	next(error);
};
