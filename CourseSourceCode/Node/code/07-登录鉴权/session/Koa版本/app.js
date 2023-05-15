const path = require('path');
const Koa = require('koa');
const static = require('koa-static');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session-minimal');
const logger = require('koa-logger');

const route = require('./routes');

const SESSION_ID = 'f8c9cee9-6291-3dc5-8eab-1b5783c3f024';

const app = new Koa();

// 支持模板引擎
app.use(views(path.join(__dirname, 'views'), {
  extension: 'ejs'
}));

// 日志中间件
app.use(logger());

// 支持post参数解析
app.use(bodyParser());

// 配置静态资源目录
app.use(static(path.join(__dirname, 'public')));

// 注册session中间件
app.use(session({
  key: SESSION_ID,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}));

// session过期校验
app.use(async (ctx, next) => {
  // 放行login相关路由和接口
  if (ctx.url.includes('login')) {
    await next();
    return;
  }

  if (ctx.session.user) {
    ctx.session.date = Date.now();
    await next();
  } else {
    if (ctx.url.includes('api')) {
      ctx.status = 401;
      ctx.body = {
        ok: 0
      };
    } else {
      ctx.redirect('/login');
    }
  }
});

// 注册路由
app.use(route.routes(), route.allowedMethods());

app.listen(3000, () => {
  console.log('Server running in: http://localhost:3000');
  require('./config/db.config');
});