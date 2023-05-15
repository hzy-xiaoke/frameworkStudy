const Koa = require('koa')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const path = require('path')
const router = require('./route')

const app = new Koa()

// 配置静态资源目录
app.use(static(path.join(__dirname, 'public')))
// 支持post参数解析
app.use(bodyParser())
// 支持模板引擎
app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}))
// 注册路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('Server running in: http://localhost:3000')
})