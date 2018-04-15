'use strict';

const webpack = require('webpack');
const { resolve } = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const stats = require('./stats');
const rules = require('./rules');
const define = require('./define');
const plugins = require('./plugins');

const entryPoint = require('./entry-point');

let sourceMap = false;

if (define.rs_analyzer)
{
    sourceMap = 'none';
}
else if (define.rs_development)
{
    sourceMap = 'cheap-module-eval-source-map';
}

process.traceDeprecation = true;

module.exports = {

    mode: define.rs_environment,

    context: define.rs_root,

    devtool: sourceMap,

    target: define.rs_target,

    entry: entryPoint.config,

    output: {
        path: define.rs_dist,
        pathinfo: define.rs_development,
        publicPath: define.rs_output_path,
        filename: define.rs_production ? 'js/[name].[chunkhash:5].js' : '[name].js',
        chunkFilename: define.rs_production ? 'js/[name].[chunkhash:5].chunk.js' : '[name].chunk.js',
        jsonpFunction: 'WJ',
        hotUpdateFunction: 'UF'
    },

    resolve: {
        symlinks: true,
        modules: [resolve(__dirname, '../node_modules'), define.rs_root],
        mainFiles: ['index'],
        enforceExtension: false,
        enforceModuleExtension: false,
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css', '.json'],
        descriptionFiles: ['package.json', 'bower.json'],
        alias: {
            'lodash-es': 'lodash',
            app: define.rs_root,
            hocs: resolve(define.rs_root, 'hocs'),
            utils: resolve(define.rs_root, 'utils'),
            typings: resolve(define.rs_root, 'typings'),
            assets: resolve(define.rs_root, 'assets'),
            config: resolve(define.rs_root, 'config'),
            layouts: resolve(define.rs_root, 'layouts'),
            segments: resolve(define.rs_root, 'segments'),
            variables: resolve(define.rs_root, 'variables'),
            containers: resolve(define.rs_root, 'containers'),
            components: resolve(define.rs_root, 'components'),
            images: resolve(define.rs_root, 'assets/images'),
            styles: resolve(define.rs_root, 'assets/styles'),
            scripts: resolve(define.rs_root, 'assets/scripts'),
            svgstore: resolve(define.rs_root, 'assets/svgstore'),
            store: resolve(define.rs_root, 'redux/store'),
            actions: resolve(define.rs_root, 'redux/actions'),
            reducers: resolve(define.rs_root, 'redux/reducers')
        }
    },

    resolveLoader: {
        modules: ['node_modules']
    },

    module: {
        rules: rules.config,
        unsafeCache: define.rs_development,
        noParse: [
            /[\/\\]react[\/\\]react\.js[\/\\]jquery[\/\\]zepto\.js$/
        ]
    },

    optimization: {
        minimize: define.rs_production,
        concatenateModules: define.rs_production,
        noEmitOnErrors: true,
        namedModules: true,
        namedChunks: true,
        runtimeChunk: {
            name: 'vendors'
        },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: !define.rs_release
            }),
            new OptimizeCSSAssetsPlugin({})
        ],
        splitChunks: {
            name: true,
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                },
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    minChunks: 2,
                    chunks: "all",
                    enforce: true
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },

    // optimization: {
    // splitChunks: {
    //     cacheGroups: {
    //     styles: {
    //         name: 'styles',
    //         test: /\.css$/,
    //         chunks: 'all',
    //         enforce: true
    //     }
    //     }
    // }

    performance: define.rs_release && {
        hints: 'warning',
        maxAssetSize: 500000,
        maxEntrypointSize: 500000,
        assetFilter: (assetFilename) => !(/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename))
    },

    watch: define.rs_development,

    plugins: plugins.config,

    bail: define.rs_release,

    cache: define.rs_development,

    stats: stats.config,

    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        open: true,
        inline: true,
        compress: false,
        contentBase: define.rs_dist,
        disableHostCheck: true,
        watchContentBase: true,
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 100,
            poll: 300
        },
        overlay: {
            warnings: true,
            errors: true
        },
        stats: stats.config,
        hot: true,
        port: define.rs_port,
        host: define.rs_host
    }
};
