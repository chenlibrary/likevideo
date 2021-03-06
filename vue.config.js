// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      // 配置跨域
      '/api': {
        target: 'http://127.0.0.1:9090',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}
