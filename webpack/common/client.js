'use strict';

const webpack = require('webpack');
const {merge} = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {srcPath, staticPath} = require('./constants');

const baseCommon = {
	target: 'web',
	output: {
		path: staticPath,
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(mjs|[jt]sx?)$/,
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
					name: 'fonts/[name].[ext]'
				}
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				loader: 'url-loader',
				options: {
					name: 'media/[name].[contenthash].[ext]',
					limit: 4096
				}
			}
		]
	},
	plugins: [
		new AssetsPlugin({
			path: staticPath,
			update: true,
			prettyPrint: true,
			removeFullPathAutoPrefix: true
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'public',
					globOptions: {
						dot: true,
						gitignore: true
					}
				}
			]
		})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		symlinks: false
	},
	stats: {
		children: false
	}
};

const baseProd = merge(baseCommon, {
	mode: 'production',
	output: {
		filename: '[name].[contenthash].js'
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				extractComments: true
			})
		]
	}
});

const baseDev = merge(baseCommon, {
	mode: 'development',
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new ReactRefreshWebpackPlugin({overlay: {sockIntegration: 'whm'}})
	],
	devtool: 'eval-cheap-module-source-map'
});

module.exports = {
	baseProd,
	baseDev
};
