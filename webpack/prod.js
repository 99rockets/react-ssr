'use strict';

const {localProd: pageClient} = require('./page/client');
const {localProd: pageServer} = require('./page/server');

module.exports = [
	pageClient,
	pageServer
];
