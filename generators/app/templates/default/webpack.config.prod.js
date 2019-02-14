const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');

module.exports = merge(
  commonConfig,
  {
    mode: 'production',
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
      filename: '<%= packageName %>.js',
      path: path.resolve(__dirname, 'dist'),
      library: '<%= packageName %>',
      libraryTarget: 'umd',
    },
    externals : {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': 'ReactDOM'
    },
  }
);