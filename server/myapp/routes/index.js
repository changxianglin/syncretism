var express = require('express');
var router = express.Router();
var MongodbClient = require('mongodb').MongoClient

var url = 'mongodb://localhost:271017'

/* GET home page. */
router.get('/', function(req, res, next) {
  MongodbClient.connect(url, (err, db) => {
    if(err) throw err
    var dbo = db.db('zhangsan')
    var addStr = {'name': '访问一次'}
    dbo.collection('site').insertOne(addStr, (err, res) => {
      if(err) throw err
      db.close()
    })
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
