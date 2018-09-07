const express = require('express')
const bodyParser = require('body-parser')
const app = express()

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
      res.json({
        result: 'success'
      })
});

app.post('/testpost', function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    result: 'post can ok'
  })
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
