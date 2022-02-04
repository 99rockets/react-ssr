import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import {errorHandler, httpsRedirect} from '../middlewares';
import {router} from '../routes';
import {config} from '../config';
import {useHmr} from './hmr';

const app = express();

app.set('trust proxy', true);

if (config.server.serveStatic) {
	app.use('/static', express.static(config.paths.static));
	app.use('/favicon.ico', express.static(path.join(config.paths.static, 'media/favicon.ico')));
}

useHmr(app);

app
	.use(httpsRedirect)
	.use(helmet(config.helmet))
	.use(express.json())
	.use(express.urlencoded({extended: false}))
	.use(cookieParser())
	.use(router)
	.use(errorHandler);

export {app};
