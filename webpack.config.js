var webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public/dist/app');
var APP_DIR = path.resolve(__dirname, 'public/src/app/components');

var config = {
    devtool: 'eval',
    /**
     * 当引入通过 npm 安装的 node.js 模块时，可能出现找不到依赖的错误。
     * Node.js 模块的依赖解析算法很简单，是通过查看模块的每一层父目录中的node_modules 文件夹来查询依赖的。
     * 当出现 Node.js 模块依赖查找失败的时候，可以尝试设置resolve.fallback和resolveLoader.fallback 来解决问题。
     */
    resolve: {
        fallback: path.join(__dirname, "node_modules"),
        extensions: ['', '.js', '.json', '.coffee']
    },

    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    },

    entry: {
        app: [
            'webpack-dev-server/client?http://127.0.0.1:4001',
            'webpack/hot/only-dev-server',
            APP_DIR + '/index.js'
        ],

        vendors: ['react']
    },

    output: {
        path: BUILD_DIR,
        filename: '[name].[hash].bundle.js',
        publicPath: 'http://127.0.0.1:4001/static/',
        chunkFilename: "[chunkhash].bundle.js"
    },

    plugins: [
        new webpack.BannerPlugin('This file is created by fanli'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
            __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.[hash].js'), // 引入插件
        new AssetsPlugin({
            prettyPrint: true,
            path: path.join(__dirname, 'views'),
            update: true,
            filename: 'assets.json'
        })
    ],

    module: {
        loaders: [{
            test: /\.jsx?/,
            loaders: ['react-hot', 'babel'],
            include: path.resolve(__dirname, 'public/src/app')
        }]
    }
};

module.exports = config;
