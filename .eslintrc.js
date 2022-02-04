'use strict';

module.exports = {
	env: {
		browser: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	rules: {
		semi: [2, 'always'],
		quotes: [2, 'single', 'avoid-escape'],
		'comma-dangle': [2, 'never'],
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-var-requires': 'off'
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx']
		}
	],
	globals: {
		module: false
	}
};
