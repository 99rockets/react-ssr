'use strict';

const {merge} = require('webpack-merge');
const {baseProd, baseDev} = require('../common/server');
const {createEntries} = require('../common/entries');

const commonConfig = {
	name: 'page-server'
};

const localProd = merge(
	baseProd,
	commonConfig,
	createEntries('server')
);

const localDev = merge(
	baseDev,
	commonConfig,
	createEntries('server')
);

module.exports = {
	localProd,
	localDev
};
