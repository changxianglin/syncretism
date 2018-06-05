const express = require('express')

const app = express()

app.get('/headers', function (req, res) {
    res.set('Content-Type', 'text/plain')
    var s = ''
    for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n'
    res.end(s)
})

app.listen(8080, function () {
    console.log('app running in port 8080')
})

