const path = require('path');
const Koa = require('koa');
const views = require('koa-views');
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const JWT = require('./utils/JWT');

const router = require('./routes');

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

// token过期校验
app.use(async (ctx, next) => {
  if (ctx.url.includes('login')) {
    await next();
    return;
  }

  const token = ctx.headers['authorization']?.split(' ')[1];
  if (token) {
    const payload = JWT.verify(token);
    if (payload) {
      console.log('payload =>', payload);
      await next();
    } else {
      ctx.status = 401;
      ctx.body = {
        ok: 0,
        msg: 'token过期'
      };
    }
  } else {
    await next();
  }
});

// 注册路由
app.use(router.routes(), router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running in: http://localhost:3000');
  require('./config/db.config');
});