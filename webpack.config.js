const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const BUILD_DIRECTORY = "build";

module.exports = function (dir) {
  return {
    entry: path.join(dir, "src/index.ts"),
    output: {
      path: path.join(dir, BUILD_DIRECTORY),
      filename: 'index.js',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'this'
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
      rules: [{
        exclude: /node_modules/,
        test: /\.ts$/,
        use: "ts-loader"
      },
      {
        test: /\.(png|jp(e*)g|svg|html)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 50 * 1024 // Convert images < 50kb to base64 strings
          }
        }]
      }
      ]
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
  };
}