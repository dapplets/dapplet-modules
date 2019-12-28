const merge = require("webpack-merge");
const common = require("../../webpack.config.js");

// ToDo: split dev and prod configs
module.exports = merge(common(__dirname), {
  mode: "development",
  devtool: "inline-source-map"
});
