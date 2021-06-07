var path = require("path");
const systemjsInterop = require("systemjs-webpack-interop/webpack-config");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  mode: "production",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist/js"),
    libraryTarget: "system",
  },
  module: {
    rules: [
      { parser: { system: false } },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  experiments: {
    syncWebAssembly: true,
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: false,
    port: 8502,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};

systemjsInterop.checkWebpackConfig(module.exports);
