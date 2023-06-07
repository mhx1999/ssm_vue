const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer:{
    port:8888,
    proxy:{
      '/api':{
        target:'http://localhost:8080/furn_ssm',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}