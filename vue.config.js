const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
let appName = process.argv
  .slice(0)
  .reverse()[0]
  .replace("--", "");
let outputPath = appName; //=== "bimq" ? "bimq" : "shidai";
console.log(process.env.VUE_APP_PRO);
console.log(IS_PROD);
process.env.VUE_APP_PRO = appName;
// process.argv.forEach((val, index) => {
//   console.log(`${index}: ${val}`);
// });
const config = {
  bimq: {
    ip: "http://10.1.80.68"
  },
  shidai: {
    ip: "http://10.1.80.68"
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
  },
  configureWebpack: config => {
    console.log("config");
    console.log(config);
    console.log("process.env.NODE_ENV");
    console.log(process.env.NODE_ENV);

    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
    } else {
      // 为开发环境修改配置...
    }
  }
};
