
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var lessMiddleware = require('less-middleware');
var index = require('./routes/index');
var users = require('./routes/users');

var api = express();

// view engine setup
api.set('views', path.join(__dirname, 'views'));
api.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//api.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
api.use(logger('dev'));
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(cookieParser());
api.use(lessMiddleware(path.join(__dirname, 'public')));
api.use(express.static(path.join(__dirname, 'public')));
api.use('/jquery', express.static(__dirname + '../node_modules/jquery/dist/'));
api.use('/', index);
api.use('/users', users);

// catch 404 and forward to error handler
api.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
api.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.api.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = api;
