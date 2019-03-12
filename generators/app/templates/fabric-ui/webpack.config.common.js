const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      compilerOptions: {
        // work around for: https://github.com/OfficeDev/office-ui-fabric-react/issues/7110
        isolatedModules: false,
      },
    }),
  ],
};