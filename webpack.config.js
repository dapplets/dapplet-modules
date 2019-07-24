const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require('fs');

module.exports = function (dir) {
  const rawdata = fs.readFileSync(path.join(dir, "manifest.json"));
  const manifest = JSON.parse(rawdata);

  const name = manifest.name;
  const branch = manifest.branch || "default";
  const version = manifest.version;
  const bundleName = manifest.dist || "index.js";

  return {
    entry: path.join(dir, "src/index.ts"),
    output: {
      path: path.join(__dirname, `dist/${name}/${branch}/${version}`),
      filename: bundleName
    },
    resolve: {
      extensions: [".ts"]
    },
    module: {
      rules: [{
          exclude: /node_modules/,
          test: /\.ts$/,
          use: "ts-loader"
        },
        {
          test: /\.(png|jp(e*)g|svg)$/,
          use: [{
            loader: 'url-loader',
            options: {
              limit: 8192 // Convert images < 8kb to base64 strings
            }
          }]
        }
      ]
    },
    plugins: [
      new CopyWebpackPlugin(["manifest.json"]),
    ],
    mode: "development",
    devtool: "inline-source-map"
  };
}