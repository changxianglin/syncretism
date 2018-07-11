var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/microblog');
  const Cat = mongoose.model('Duck', { name: String });
  const kitty = new Cat({ name: 'reg' });
  kitty.save().then(() => console.log('meow'));
  res.send('The time is reg ' + new Date().toString());
});

module.exports = router;
