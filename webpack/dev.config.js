const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base.config.js');
const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = merge(baseConfig, {
  devServer: {
    contentBase: 'public',
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].bundle.[hash].js',
  },
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', "css-loader"]
        },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'detail',
      filename: 'detail.html',
      template: './public/index.html',
      // chunks: ['index'],
      // excludeChunks: ['0','1'],
      inject: 'body'
    }),
  ]
});