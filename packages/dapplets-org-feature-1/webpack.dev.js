const { merge } = require("webpack-merge");
const common = require("../../webpack.config.js");

module.exports = merge(common(__dirname), {
  mode: "development",
  devtool: "inline-source-map",
  //externals: ['common-adapter.dapplet-base.eth']
});
