/**
 * Created by sunlong on 16/1/27.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        index:['./src/index.js']
    },
    output: { path: __dirname+"/js", filename: '[name].js', publicPath:"/js/" },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("development")
            }
        })
    ],
    devtool: "#source-map"
};