module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("ts-loader")
      },
      {
        loader: require.resolve("react-docgen-typescript-loader")
      },
      {
        loader: "tslint-loader",
        options: {
          /* Loader options go here */
        }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
