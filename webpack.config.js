var path = require('path');
var fs = require('fs');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    debug:true,
    devtool: 'eval-source-map',
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: './build',
        publicPath: '/'
    },
    module: {
        preloaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'eslint'
            }
        ],
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "url-loader?limit=10000&mimetype=application/font-woff" 
            },
            { 
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
                loader: "file-loader" 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]    
}