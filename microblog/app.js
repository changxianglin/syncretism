<<<<<<< HEAD
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const  urlencodedParser = bodyParser.urlencoded({ extended: false })

let html = `
    <form action="/" method="post">
    <input type="text" name="title">
    <br>
    <input type="text" name="content">
    <br>
    <input type="submit" value="submit"> 
    </form>
`

app.get('/post', (req, res) => {
    res.send(html)
})

app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    let content = req.body.title
    fs.appendFileSync('msg.txt', content + '\r\n', 'utf8')
    let message = `<span>发表成功</span><br>
                    <a href="/">回到首页</a> <a href="/post">再发一个</a>`
    res.send(message)
})

app.get('/', (req, res) => {
    let aticles = fs.readFileSync('msg.txt', 'utf8')
    console.log(aticles)
    let content = aticles ? aticles.split('\r\n') + `<br><a href="/post">去发一个</a>` : `<a href="/post">去发一个</a>`
    res.send(content)
})

app.listen(8089, () => {
    console.log('app running port 8089')
})
=======
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post')
var regRouter = require('./routes/reg')
var loginRouter = require('./routes/login')
var logoutRouter = require('./routes/logout')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/u', usersRouter);
app.use('/post', postRouter)
app.use('/reg', regRouter)
app.use('/login', loginRouter)
app.use('/logout', logoutRouter)

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
>>>>>>> 65c54ede607d06735a946bdf3387b9db3051ae60
