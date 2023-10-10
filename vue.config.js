const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
  // ,devServer: {
  //   port:7000
  // }
  // The port number set should not be within 1024
})

module.exports = {
  publicPath: './'
}