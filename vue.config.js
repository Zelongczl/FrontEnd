const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // ,devServer: {
  //   port:7000
  // }
  // 设置的端口号不要1024以内
})

module.exports = {
  publicPath: './'
}