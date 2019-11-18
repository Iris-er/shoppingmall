module.exports = {
  lintOnSave: false,
  devServer: {
    //host: "https://192.168.0.133:8080",要设置当前访问的ip 否则失效
    port: 8080,
    open: true, //浏览器自动打开页面
    proxy: {
      '/api': {
        target: '目标网址',//http://yapi.demo.qunar.com/mock/68531
        ws: true,
        changeOrigin: true,
        //重写路径  需要设置重写的话，要在后面的调用接口前加上/api 来代替target
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    overlay: {
      warning: false,
      errors: false
    }
  }
}