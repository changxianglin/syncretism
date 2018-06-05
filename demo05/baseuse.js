const express = require('express')

const app = express()

app.get('/about', function (req, res) {
    res.render('about')
})


app.listen(8088, function () {
    console.log('about running in port 8088')
})