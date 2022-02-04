import path from 'path';
import {Request} from 'express';
import {config} from '../config';
import {pageTemplate} from './template';

import type {RenderOptions} from './types';

const STATIC_PATH = config.paths.static;
const ASSET_FILE_PATH = path.join(STATIC_PATH, 'webpack-assets.json');

/** Getting assets */
const getAssets = () => {
	if (process.env.NODE_ENV === 'development') {
		delete require.cache[ASSET_FILE_PATH];
	}

	return require(ASSET_FILE_PATH);
};

/** Getting scripts */
export const getScripts = (pageId: string) => []
	.concat(getAssets()[pageId].js)
	.filter(Boolean);

/** Preparing render parameters */
const prepare = (req: Request, {pageId, preloadedState}: RenderOptions) => ({
	pageId,
	renderOptions: {
		url: req.originalUrl,
		preloadedState
	},
	templateOptions: {
		scripts: getScripts(pageId)
	}
});

/** Getting render function */
const getRenderer = (pageId: string) => {
	const rendererPath = path.join(STATIC_PATH, `${pageId}-server.js`);

	if (process.env.NODE_ENV === 'development') {
		delete require.cache[rendererPath];
	}

	return require(rendererPath).default;
};

/** Preparing page layout */
export const renderLayout = (req: Request, options: RenderOptions) => {
	const {pageId, renderOptions, templateOptions} = prepare(req, options);
	const renderer = getRenderer(pageId);
	const rendererOutput = renderer(renderOptions);

	return pageTemplate({
		...templateOptions,
		...rendererOutput
	});
};
