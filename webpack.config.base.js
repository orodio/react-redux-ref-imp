"use strict";

var webpack      = require("webpack")
var autoprefixer = require("autoprefixer")
var cssNested    = require("postcss-nested")
var Extract      = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    app: __dirname + "/src/index.js"
  },

  output: {
    path: __dirname + "/static",
    filename: "[name].js"
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ["babel-loader"], exclude: /node_modules/ },
      { test: /\.css$/, loader: Extract.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader")}
    ]
  },

  postcss: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("postcss-position"),
    require("postcss-quantity-queries"),
    require("postcss-clearfix"),
    require("postcss-hexrgba")
  ],

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new Extract("app.css", { allChunks: true })
  ]
}
