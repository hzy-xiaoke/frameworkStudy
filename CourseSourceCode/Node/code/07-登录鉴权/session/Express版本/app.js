const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const loginRouter = require('./routes/login');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册session中间件
app.use(session({
  name: 'demo',
  secret: 'f8c9cee9-6291-3dc5-8eab-1b5783c3f024',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false
  },
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://test:12345@localhost:27017/session',
    ttl: 1000 * 60 * 60
  })
}));

// session过期校验
app.use((req,res,next) => {
  // 放行login相关路由和接口
  if (req.url.includes('login')) {
    next();
    return;
  }

  if (req.session.user) {
    req.session.date = Date.now();
    next();
  } else {
    if (req.url.includes('api')) {
      res.status(401).send({
        ok: 0
      });
    } else {
      res.redirect('/login');
    }
  }
});

app.use('/', indexRouter);
app.use('/api', userRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
