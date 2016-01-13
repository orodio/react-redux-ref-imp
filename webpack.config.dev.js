"use strict";

var webpack    = require("webpack")
var baseConfig = require("./webpack.config.base")
var config     = Object.create(baseConfig)

config.plugins = config.plugins.concat([
  new webpack.DefinePlugin({
    "process.env.NODE_ENV": JSON.stringify("development")
  })
])

config.stats = {
  children: false
}

module.exports = config
