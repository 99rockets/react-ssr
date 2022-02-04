'use strict';

const path = require('path');
const {views, viewsPath} = require('./constants');

const addDependencies = (dependencies, entries) => (
	Object.keys(entries).reduce((result, key) => {
		result[key] = [].concat(dependencies, entries[key]);
		return result;
	}, {})
);

const getClientEntries = () => (
	views.reduce((result, view) => {
		result[view] = path.join(viewsPath, view, 'client');
		return result;
	}, {})
);

const getServerEntries = () => (
	views.reduce((result, view) => {
		result[`${view}-server`] = path.join(viewsPath, view, 'server');
		return result;
	}, {})
);

const createEntries = (type, dependencies = []) => {
	let entry = type === 'server'
		? getServerEntries()
		: getClientEntries();

	if (dependencies.length) {
		entry = addDependencies(dependencies, entry);
	}

	return {entry};
};

module.exports = {
	createEntries
};
