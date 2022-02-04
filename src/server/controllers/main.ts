import {Request, Response} from 'express';
import {renderLayout} from '../render';

/** View controller */
export const controller = async(req: Request, res: Response) => {
	const html = renderLayout(req, {
		pageId: 'page',
		preloadedState: {
			title: 'Title from server'
		}
	});

	res.send(html);
};
