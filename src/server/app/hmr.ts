import path from 'path';
import {config} from '../config';

import type {Express} from 'express';

export const useHmr = (app: Express) => {
	if (process.env.NODE_ENV === 'development') {
		const webpack = require('webpack');
		const devMiddleware = require('webpack-dev-middleware');
		const hmrMiddleware = require('webpack-hot-middleware');
		const webpackConfig = require(path.join(config.paths.webpack, 'dev'));
		const compiler = webpack(webpackConfig);

		app.use(devMiddleware(compiler, {
			publicPath: config.server.publicPath,
			writeToDisk: (filePath: string) => !/\.hot-update\.js(on)?$/.test(filePath)
		}));
		app.use(hmrMiddleware(compiler, {
			log: console.log
		}));
	}
};
