var express = require('express')

var controller = require('./controller/todocontroller')

var app = express()

app.set('view engine', "ejs")

controller(app)

app.listen(3000, function() {
    console.log('running port 3000')
})