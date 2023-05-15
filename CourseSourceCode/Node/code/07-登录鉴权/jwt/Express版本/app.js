const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const JWT = require('./utils/JWT');

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

// token过期校验
app.use((req,res,next) => {
  if(req.url.includes('login')){
    next();
    return;
  }

  const token = req.headers['authorization']?.split(' ')[1];
  console.log(token);
  if(token){
    const payload = JWT.verify(token);
    if(payload){
      console.log(payload);
      next();
    }else{
      res.status(401).send({
        ok: 0,
        msg: 'token过期'
      });
    }
  }else{
    next();
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
