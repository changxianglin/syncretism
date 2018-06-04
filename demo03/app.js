const express = require('express')
const handlebars = require('express3-handlebars').create({defaultLayout: 'main'})

const fortune = require('./lib/fortune.js')

const app = express()
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 5000)


// 测试页面
app.use(function (req, res, next) {
    res.locals.showTests = app.get('env') !== 'production' && req.query.test === '1'
    next()
})
// app.get('/', function (req, res) {
//     res.type('text/html')
//     res.send('Meadowlark Travel')
// })
//
// app.get('/about', function (req, res) {
//     res.type('text/html')
//     res.send('About Meadowlark Travel')
// })

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res) {
    res.render('home')
})

app.get('/about', function (req, res) {
    // var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', {fortune: fortune.getFortune()})
})

app.use(function (req, res, next) {
    res.status(404)
    res.render('404')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500)
    res.render('500')
})

// app.use(function (req, res) {
//     res.type('text/html')
//     res.status(404)
//     res.end('404 - Not Found')
// })
//
// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.type('text/html')
//     res.status(500)
//     res.send('500 - Server Error')
// })

app.listen(app.get('port'), function () {
    console.log('running in port 5000')
})