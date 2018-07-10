var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.connect('mongodb://localhost/microblog');
  const Cat = mongoose.model('Fish', { name: String });
  const kitty = new Cat({ name: 'u-user' });
  kitty.save().then(() => console.log('meow'));
  res.send('respond with a resource');
});

router.get('/:username', function(req, res, next) {
  mongoose.connect('mongodb://localhost/microblog');
  const Cat = mongoose.model('Phone', { name: String });
  const kitty = new Cat({ name: req.params.username});
  kitty.save().then(() => console.log('meow'));
  res.send('user: ' + req.params.username);
});

module.exports = router;
