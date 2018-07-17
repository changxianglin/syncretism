const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const seesion = require('express-session')
const mongoose = require('mongoose');

const app = express()
const jsonParser = bodyParser.json()
const urlencodeParser = bodyParser.urlencoded({extends: false})

mongoose.connect('mongodb://blog:miniblog1@ds133601.mlab.com:33601/createblog');
const Cat = mongoose.model('Cat', { name: String, last: String});
const kitty = new Cat({ name: 'Zildjian', last: "1"});

app.get('/', (req, res) => {
    kitty.save().then(() => console.log('meow'));
    res.send('link database')
})

app.get('/user/:id', urlencodeParser, function (req, res) {
    // res.download('/phone/activety618.png')
    res.send('OK' + req.params.id);
})

let html = `
<form action="/post" method="get">
1 <input name="start">
<br>
2 <input name="finaly">
<br>
<input type="submit" value="submit">
</form>
`

app.get('/about', (req, res) => {
    res.send(html)
})

app.get('/post', urlencodeParser, (req, res) => {
    console.log(req.query)
    res.send('post' + JSON.stringify(req.query))
})

app.get('/list', (req, res) => {
  let content = '查询'
  Cat.find(function (err, kittys) {
    if (err) return console.error(err);
    console.log(kittys);
  })
  res.send(content)
})

app.get('/update', (req, res) => {
  let content = 'update'
  Cat.update({name: 'Zildjian'}, {last: '3'}, function(err, kittys) {
    if(err) return console.error(err)
    console.log(kittys)
  })
  res.send(content)
})

app.get('/remove', (req, res) => {
  Cat.remove(function (err, kittys) {
    if(err) return console.error(err)
    console.log(kittys)
  })
  res.send('remove')
})

app.listen(7020, () => {
    console.log('app run port 7020')
})
