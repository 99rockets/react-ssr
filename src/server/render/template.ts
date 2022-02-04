import serialize from 'serialize-javascript';
import {config} from '../config';

import type {PageTemplateOptions} from './types';

/** HTML page template */
export const pageTemplate = ({
	title,
	meta,
	content,
	preloadedState,
	scripts
}: PageTemplateOptions) => `
	<!doctype html>
	<html lang="eng">
		<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width,maximum-scale=1,initial-scale=1,user-scalable=0">
			<meta name="apple-mobile-web-app-capable" content="yes">
			${title}
			${meta}
		</head>
		<body>
			<div id="root">${content}</div>
			<script>window.__data=${serialize(
				preloadedState,
		{isJSON: true}
			)};</script>
			<script>window.publicPath = '${config.server.publicPath}';</script>
			${scripts.map((script) => (
				`<script crossorigin src="${config.server.publicPath + script}"></script>`
			)).join('')}
		</body>
	</html>
`;
