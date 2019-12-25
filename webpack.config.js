const fs = require('fs');
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackBeforeBuildPlugin = require('before-build-webpack');

const DEFAULT_BUNDLE_NAME = "index.js";
const BUILD_DIRECTORY = "build";
const ARCHIVE_DIRECTORY = "archive";
const MANIFEST_NAME = "manifest.json";

module.exports = function (dir) {
  const json = fs.readFileSync(path.join(dir, MANIFEST_NAME), "utf8");
  const manifest = JSON.parse(json);

  const bundleName = manifest.dist || DEFAULT_BUNDLE_NAME;

  return {
    entry: path.join(dir, "src/index.ts"),
    output: {
      path: path.join(dir, BUILD_DIRECTORY),
      filename: bundleName
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
          test: /\.(png|jp(e*)g|svg)$/,
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
      new WebpackBeforeBuildPlugin(function (stats, callback) {
        // Archiving previous bundles
        if (fs.existsSync(path.join(dir, BUILD_DIRECTORY)) &&
          fs.existsSync(path.join(dir, BUILD_DIRECTORY, MANIFEST_NAME))) {

          const currentJson = fs.readFileSync(path.join(dir, MANIFEST_NAME), "utf8");
          const currentManifest = JSON.parse(currentJson);

          const previousJson = fs.readFileSync(path.join(dir, BUILD_DIRECTORY, MANIFEST_NAME), "utf8");
          const previousManifest = JSON.parse(previousJson);

          if (previousManifest.version !== currentManifest.version &&
            fs.existsSync(path.join(dir, BUILD_DIRECTORY, previousManifest.dist || DEFAULT_BUNDLE_NAME))) {

            if (!fs.existsSync(path.join(dir, ARCHIVE_DIRECTORY)))
              fs.mkdirSync(path.join(dir, ARCHIVE_DIRECTORY));

            if (!fs.existsSync(path.join(dir, ARCHIVE_DIRECTORY, previousManifest.version))) {
              fs.mkdirSync(path.join(dir, ARCHIVE_DIRECTORY, previousManifest.version));

              fs.copyFileSync(
                path.join(dir, BUILD_DIRECTORY, MANIFEST_NAME),
                path.join(dir, ARCHIVE_DIRECTORY, previousManifest.version, MANIFEST_NAME)
              );

              fs.copyFileSync(
                path.join(dir, BUILD_DIRECTORY, previousManifest.dist || DEFAULT_BUNDLE_NAME),
                path.join(dir, ARCHIVE_DIRECTORY, previousManifest.version, previousManifest.dist || DEFAULT_BUNDLE_NAME)
              );

              console.log(`Version ${previousManifest.version} has been archived.`);
            } else {
              console.log(`Skipping archiving... The archive of ${previousManifest.version} version exists already.`);
            }
          }
        }
        callback();
      }, ['watch-run']),
      new CopyWebpackPlugin([MANIFEST_NAME])
    ],
    mode: "development",
    devtool: "inline-source-map"
  };
}