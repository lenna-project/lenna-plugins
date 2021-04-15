var path = require("path");
const systemjsInterop = require("systemjs-webpack-interop/webpack-config");
const { VueLoaderPlugin } = require('vue-loader')

// Pass in your webpack config, and systemjs-webpack-interop will make it
// work better with SystemJS
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
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        { parser: { system: false } }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  externals: ['vue'],
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

// Throws errors if your webpack config won't interop well with SystemJS
systemjsInterop.checkWebpackConfig(module.exports);
