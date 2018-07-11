var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/microblog');
  const Cat = mongoose.model('Sheep', { name: String });
  const kitty = new Cat({ name: 'post' });
  kitty.save().then(() => console.log('meow'));
  res.send('The time is post' + new Date().toString());
});

module.exports = router;
