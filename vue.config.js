const fs = require("fs");
const path = require("path");
module.exports = {
  chainWebpack(config) {
    
    // config.resolve.extensions.prepend('ts')
    // config.resolve.extensions.prepend('tsx')
    // config.module.rule('ts').test(/\.ts/).use('cache-loader').loader('cache-loader')
    // config.module.rule('ts').use('babel-loader').loader('babel-loader') 
    // config.module.rule('ts').use('ts-loader').loader('ts-loader') 
    
    // config.entry('app').clear().add('./src/main.ts')

    fs.writeFileSync(
      path.resolve(__dirname, "./config.js"),
      config.toString()
    );

    return config

    // console.log("config.toConfig();", config.toConfig());
  }
};
