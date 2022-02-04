/**
 * Public Path
 * https://webpack.js.org/guides/public-path/#on-the-fly
 */
if (typeof window === 'undefined') {
	// @ts-ignore
	// eslint-disable-next-line
	__webpack_public_path__ = '/static/';
} else {
	// @ts-ignore
	// eslint-disable-next-line
	__webpack_public_path__ = window.publicPath;
}

export {};
