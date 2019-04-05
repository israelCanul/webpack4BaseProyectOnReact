const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: "dist",
    port: 3000,
    publicPath: "http://localhost:3000/",
    historyApiFallback: true,
    hotOnly: true
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    chunkFilename: "[name].[chunkhash].js",
    filename: "[name].bundle.[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "detail",
      filename: "index.html",
      template: "./public/index.html",
      // chunks: ['index'],
      // excludeChunks: ['0','1'],
      inject: "body"
    })
  ]
});
