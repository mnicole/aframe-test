var path = require('path');
var WebpackMd5Hash = require('webpack-md5-hash');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

require('babel-polyfill');

module.exports = {
    // entry: ['./src/index.js'],
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        cacheDirectory: true,
                    }
                }
            },
            {
                test: /\.(dae|png|mp4)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',
                        outputPath: 'assets/'
                    }
                }
            }
        ]
    },
    plugins: [
        new WebpackMd5Hash(),
        new HtmlWebpackPlugin({
            template: 'index.esj',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true
            },
            inject: 'head'
        }),
        new CopyWebpackPlugin([
            {
                from: 'assets',
                to: 'assets'
            }
        ]),
    ]
};
