'use strict';

const path = require('path');

/** Project root folder */
const rootPath = path.resolve(__dirname, '..', '..');

/** Path to sources */
const srcPath = path.resolve(rootPath, 'src');

/** Path to static folder */
const staticPath = path.resolve(rootPath, 'static');

/** Path to views folder */
const viewsPath = path.resolve(rootPath, 'src/views');

/** List of available views for pages */
const views = [
	'page'
];

module.exports = {
	srcPath,
	staticPath,
	views,
	viewsPath
};
