'use strict';

const {merge} = require('webpack-merge');
const {baseProd, baseDev} = require('../common/client');
const {createEntries} = require('../common/entries');

const commonConfig = {
	name: 'page-client'
};

const localProd = merge(
	baseProd,
	commonConfig,
	createEntries('client')
);

const localDev = merge(
	baseDev,
	commonConfig,
	createEntries(
		'client',
		['webpack-hot-middleware/client?name=page-client']
	)
);

module.exports = {
	localProd,
	localDev
};
