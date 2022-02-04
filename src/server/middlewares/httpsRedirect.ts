import {Request, Response, NextFunction} from 'express';
import {config} from '../config';

/** Forced to use HTTPS if setting enabled in config */
export const httpsRedirect = (req: Request, res: Response, next: NextFunction) => {
	if (config.server.https && !req.secure) {
		return res.redirect('https://' + req.headers.host + req.url);
	}

	next();
};
