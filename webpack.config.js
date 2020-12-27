const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'static', 'build'),
        publicPath: path.resolve(__dirname, 'src'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    entry: {
        app: './index.jsx'
    },
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'static', 'build'),
        filename: 'app.js',
        publicPath: path.resolve(__dirname, 'static', 'build')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env', '@babel/react']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
      ],
};