const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals : {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '<%= packageName %>.js',
    path: path.resolve(__dirname, 'dist'),
    library: '<%= packageName %>',
    libraryTarget: 'umd',
  },
  // For local dev
  // mode: 'development',
};