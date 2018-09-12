const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const path = require('path')
const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/login', function (req, res) {
      console.log(req.body.user, req.body.password)
      console.log('----')
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      res.json({
        result: 'ok'
      })
});

app.get('/testapi', function (req, res) {
      // console.log(req.body.user, req.body.password)
      res.header("Access-Control-Allow-Origin", "*");
        console.log(req.cookies)
      res.json({
        result: 'success'
      })
});

app.post('/testpost', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.cookies)
  res.json({
    result: 'post can ok'
  })
})

app.get('/testSetcookie', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    const {setCookie}=req.cookies;
    //如果没有用户的cookie字段，那么输出错误码
    if(setCookie){
        return res.json({code:1})
    }
    res.cookie('userName', 'zhangsan')
    res.json({
        result: 'set cookie ok'
    })
})


app.get('/todo', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    fs.readFile('todo.txt', function (err, doc) {
        if(err) throw err
        res.json({
            todo: doc.toString()
        })
    })
})

app.post('/todo', function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body)
    if(req.body) {
        let content = req.body.todo
        console.log(content)
        fs.appendFile('todo.txt', content + '/n', function (err) {
            if(err) throw err
            res.json({
                code: 0,
                result: 'ok'
            })
        })
    } else {
        res.json({
            code: '1',
            msg: 'should right write'
        })
    }
})


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
