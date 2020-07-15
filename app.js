const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressSession=require('express-session');

const indexRouter = require('./routes/index');
const userShow=require('./routes/users/show');
const userSave=require('./routes/users/save');


const db=require('./models');

const app = express();


db.sequelize.sync().then(()=>{
  console.log('Conectado');
});
// view engine setup
app.set('view-options', {layout:false});
//app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));

app.use(expressSession({secret:'abco789avb87wer34'}))

app.use('/', indexRouter);
app.use('/user_save',userSave);
app.use('/user_show',userShow);


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
