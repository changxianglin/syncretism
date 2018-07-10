var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/microblog');
  const Cat = mongoose.model('Cat', { name: String });
  const kitty = new Cat({ name: 'index page' });
  kitty.save().then(() => console.log('meow'));
  res.render('index', { title: 'Express' });
});

module.exports = router;
