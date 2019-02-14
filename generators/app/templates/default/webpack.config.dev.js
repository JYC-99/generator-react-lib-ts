const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonConfig = require('./webpack.config.common');

module.exports = merge(
  commonConfig,
  {
    mode: 'development',
    entry: [
      './demo/index.dev.tsx' // the entry point of our app
    ],
    devtool: 'cheap-module-eval-source-map',
    plugins: [
      new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
      new HtmlWebpackPlugin({
        template: 'demo/index.html'
      })
    ],
  }
);