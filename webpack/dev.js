'use strict';

const {localDev: pageClient} = require('./page/client');
const {localDev: pageServer} = require('./page/server');

module.exports = [
	pageClient,
	pageServer
];
