'use strict';

const webpack = require('webpack');
const define  = require('../define');

const WebpackChunkHash = require('webpack-chunk-hash');
const WebpackManifestPlugin = require('webpack-manifest-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack2-plugin');

const plugins = [
    new WebpackManifestPlugin({
        basePath: define.rs_root,
        publicPath: define.rs_dist,
        fileName: "webpack-manifest.json"
    }),
    new WebpackChunkHash(),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor'],
        filename: 'vendor.[hash:5].js',
        minChunks: function (module) {
            return module.context && module.context.indexOf('node_modules') !== -1;
        }
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'runtime',
    //     chunks: ['vendor'],
    //     minChunks: Infinity
    // }),
    new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
        exclude: ['vendor', 'styles', 'app']
    }),
    new ChunkManifestPlugin({
        filename: 'chunk-manifest.json',
        manifestVariable: 'webpackManifest'
    }),
    new webpack.HashedModuleIdsPlugin()
];

module.exports.config = plugins;
