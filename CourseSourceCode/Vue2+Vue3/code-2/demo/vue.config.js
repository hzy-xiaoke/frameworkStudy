// Vue项目的配置文件

module.exports = {
  lintOnSave: false, // 暂时关闭代码格式检测

  // 配置反向代理
  devServer: {
    proxy: {
      '/xiaoke': {
        target: 'https://m.maoyan.com', // 目标接口的域名
        // 协议是https的时候使用该参数
        // secure: true,
        changeOrigin: true, // 是否改变访问源
        pathRewrite: { // 重写路径
          '^/xiaoke': ''
        }
      }
    }
  },

  // 不生成map文件
  productionSourceMap: false,
  publicPath: './'
}
