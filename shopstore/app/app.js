var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var adminRouter = require('./routes/admin');
var loginRouter = require('./routes/login');
var orderRouter = require('./routes/order');
var pageRouter = require('./routes/page');
var signupRouter = require('./routes/signup');
var paymentRouter = require('./routes/payment');
var dashboardtRouter = require('./routes/dashboard');
var receptRouter = require('./routes/recept');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/', adminRouter);
app.use('/', loginRouter);
app.use('/', orderRouter);
app.use('/', pageRouter);
app.use('/', signupRouter);
app.use('/', paymentRouter);
app.use('/', dashboardtRouter)
app.use('/', receptRouter)

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
