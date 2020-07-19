const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const expressSession=require('express-session');
const cors=require('cors');

const indexRouter = require('./routes/index');
const userShow=require('./routes/users/show');
const userSave=require('./routes/users/save');
const userEdit=require('./routes/users/edit');
const userUpdate=require('./routes/users/update');

const loginRouter=require('./routes/users/login');
const noteSave=require('./routes/notes/save');
const noteShow=require('./routes/notes/show');
const noteDelete=require('./routes/notes/delete');
const noteEdit=require('./routes/notes/edit');
const noteUpdate=require('./routes/notes/update');



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

const optCors={

  origin: '*', // client (todo mundo pode acessar)
  
  optionsSuccessStatus: 200
  
  }
  app.use(cors(optCors));

//app.use(expressSession({secret:'abco789avb87wer34'}))

app.use('/', indexRouter);
app.use('/user_save',userSave);
app.use('/user_show',userShow);
app.use('/login',loginRouter);
app.use('/user_edit',userEdit);
app.use('/user_up',userUpdate)

app.use('/note_save',noteSave);
app.use('/show_notes_user',noteShow);
app.use('/note_del',noteDelete);
app.use('/note_edit',noteEdit);
app.use('/note_up',noteUpdate);



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
