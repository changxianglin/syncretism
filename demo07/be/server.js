var express = require('express');
var app = express();

app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.setHeader("Access-Control-Allow-Origin","*")
  res.json({
    title: '这是首页',
    content: '开始认识到前台和后台的关联以及怎么更好的合作。'
  })
});

app.get('/user', function(req, res) {
  res.setHeader("Access-Control-Allow-Origin","*")
  res.json({
    title: '这是用户页面',
    name:　'zhangsan',
    age: 25
  })
})

app.get('/topic', function(req, res) {
  res.setHeader("Access-Control-Allow-Origin","*")
  res.json({
    title: '话题页面',
    content: '这是已经切换到话题页面'
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
