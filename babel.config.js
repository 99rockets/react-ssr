'use strict';

const options = {
	presets: [
		['@babel/preset-env', {
			loose: true,
			useBuiltIns: 'usage',
			corejs: 3
		}],
		'@babel/preset-react',
		'@babel/preset-typescript'
	],
	plugins: [
		[
			'@emotion',
			{
				sourceMap: true,
				cssPropOptimization: false
			}
		]
	],
	sourceType: 'unambiguous'
};

module.exports = (api) => {
	api.cache.using(() => process.env.NODE_ENV);

	if (api.env('development')) {
		options.plugins.push(['react-refresh/babel', {
			skipEnvCheck: true
		}]);
	}

	return options;
};
