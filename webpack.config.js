const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: './client/index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};