var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpackMiddleware = require('webpack-dev-middleware');

module.exports = {
    entry: [
        './src/index.js'
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        inline: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
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
        new HtmlWebpackPlugin({
            template: 'index.ejs',
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
