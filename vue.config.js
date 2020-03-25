const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
let appName = process.argv
  .slice(0)
  .reverse()[0]
  .replace("--", "");
let outputPath = appName; //=== "bimq" ? "bimq" : "shidai";
console.log(appName);
console.log(IS_PROD);
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
const config = {
  shidai: {
    ip: ""
  }
};
module.exports = {
  productionSourceMap: false,
  // publicPath: IS_PROD ? "../" + outputPath + "/" : "./",
  publicPath: "",
  outputDir: "dist/" + outputPath,
  // assetsDir: "static/" + outputPath,
  assetsDir: "static",
  lintOnSave: true,
  runtimeCompiler: true,
  pages: {
    index: {
      entry: "src/views/" + appName + "/main.js"
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: config[appName].ip,
        ws: true,
        changeOrigin: true
      },
      "/foo": {
        target: "<other_url>"
      }
    }
  }
};
