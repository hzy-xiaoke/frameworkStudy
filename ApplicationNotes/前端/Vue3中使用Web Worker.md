#### 使用Vue-CLI作为脚手架的项目

+ 使用`worker-loader` https://www.npmjs.com/package/worker-loader

  1. 安装 `worker-loader` 

     > npm install worker-loader -D

  2. 使用 `worker-loader`

     + 行内loader

       ```javascript
       import Worker from 'worker-loader!./Worker.js'
       ```

     + 在 `vue.config.js` 进行配置后使用

       ```javascript
       // vue.config.js文件
       module.exports = {
           chainWebpack: config => {
           	config.module
           		.rule('worker')
                   .test(/\.worker\.js$/)
       			.use('worker-loader')
       			.loader('worker-loader')
       			.end()
               
               // 解决worker热更新问题
               // 如果不加在开发环境下有时会出现 Uncaught SyntaxError: Unexpected token '<'
               config.module
               	.rule('js')
               	.exclude
               	.add(/\.worker\.js$/)
       	}
       }
       ```

       ```javascript
       // 使用到worker的文件
       import Worker from './Worker.js'
       
       let worker = new Worker()
       ```

  

参考文章:  

+ vue3中使用Web Worker多线程 https://blog.csdn.net/weixin_42063951/article/details/125300644
+ vue 中优雅的使用 web worker https://zhuanlan.zhihu.com/p/444773216

