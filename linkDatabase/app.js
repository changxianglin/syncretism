const express = require('express')

const app = express()

const mongoose = require('mongoose');
mongoose.connect('mongodb://blog:miniblog1@ds133601.mlab.com:33601/createblog');

app.get('/', (req, res) => {
    const Cat = mongoose.model('Cat', { name: String });
    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
    res.send('link database')
})

app.get('/user/:id', function (req, res) {
    res.download('/phone/activety618.png')
    // res.send('OK' + app.param);
})


app.listen(7020, () => {
    console.log('app run port 7020')
})