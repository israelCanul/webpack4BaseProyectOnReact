const webpack = require('webpack');

const merge = require('webpack-merge');
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"],
      },
    ],
  },
  optimization:{
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
  plugins: [
    // Extract imported CSS into own file
    //new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
    // Minify JS
    // new UglifyJsPlugin({
    //   sourceMap: false,
    //   compress: true,
    // }),
    // Minify CSS
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    // }),
  ],
});