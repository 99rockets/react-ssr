'use strict';

const webpack = require('webpack');
const {merge} = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {srcPath, staticPath} = require('./constants');

const baseCommon = {
	target: 'node',
	output: {
		path: staticPath,
		filename: '[name].js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true
				},
				include: [srcPath]
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]',
					emitFile: false
				}
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				loader: 'url-loader',
				options: {
					name: 'media/[name].[contenthash].[ext]',
					limit: 4096,
					emitFile: false
				}
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		symlinks: false
	},
	stats: {
		children: false
	}
};

const baseProd = merge(baseCommon, {
	mode: 'production'
});

const baseDev = merge(baseCommon, {
	mode: 'development',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin({overlay: false})
	],
	devtool: false
});

module.exports = {
	baseProd,
	baseDev
};
