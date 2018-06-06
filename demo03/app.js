const express = require('express')
const handlebars = require('express3-handlebars').create({defaultLayout: 'main'})

const fortune = require('./lib/fortune.js')

const app = express()
app.engine('handlebars', handlebars.engine)
app.set('view engine', 'handlebars')

app.set('port', process.env.PORT || 5000)

app.use(require('body-parser')())

app.get('/newsletter', function( req, res){
    //我们 会在 后面 学到 CSRF…… 目前, 只 提供 一个 虚拟 值
    res. render('newsletter', {csrf: 'CSRF token goes here' });
});

app.post('/process', function(req, res){
    console. log(' Form (from querystring): ' + req.req.query.form);
    console. log(' CSRF token (from hidden form field): ' + req.body.csrf);
    console. log(' Name (from visible form field): ' + req.body.name);
    console. log(' Email (from visible form field): ' + req.body.email);
    res.redirect( 303, '/thank- you');
});


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

app.get('/error', function (req, res) {
    res.status(500)
    res.render('error')
})

app.get('/greeting', function (req, res) {
    res.render('about', {
        message: 'welcome',
        style: req.query.style,
        userid: req.cookie.userid,
        username: req.session.username,
    })
})

app.get('/no-layout', function (req, res) {
    res.render('no-layout', {layout: null})
})

app.get('/custom-layout', function (req, res) {
    res.render('custom-layout', {layout: 'custom'})
})

app.get('/test', function (req, res) {
    res.type('text/html')
    res.send('this is a test')
})

app.post('/process-contact', function (req, res) {
    console.log('Received contact from ' + req.body.name  + '<' + req.body.email + '>' )
    res.redirect(303, '/thank-you')
})


app.post('/process-contact', function (req, res) {
    console.log('Received contact from  ' + req.body.name + '<' + req.body.email + '>')
    try{
        return res.xhr ? res.render({success: true}) : res.redirect(303, '/thank-you')
    } catch (ex) {
        return res.xhr ? res.json({error: 'Database error'}) : res.redirect(303, '/database-error')
    }
})

var tours = [
    {id: 0, name: 'Hood River', price: 99.99},
    {id: 1, name: 'Oregon Coast', price: 149.95},
]

app.get('/api/tours', function (req, res) {
    res.json(tours)
})

app.put('/api/tour/:id', function (req, res) {
    var p = tours.some(function (p) {
        return p.id == req.params.id
    })
    if(p) {
        if(req.query.name) p.name = req.query.name
        if(req.query.price) p.price = req.query.price
        res.json({suceess: true})
    } else {
        res.json({error: 'No such tour exists.'})
    }
})

app.del('/api/tour/:id', function (req, res) {
    var i
    for( var i = tours.length -1 ; i >= 0; i--) {
        if(tours[i].id === req.params.id) break
        if(i >= 0 ) {
            tours.splice(i, 1)
            res.json({success: true})
        } else {
            res.json({error: 'No such tour exists.'})
        }
    }
})

// app.use(function (req, res, next) {
//     res.status(404)
//     res.render('404')
// })

// app.use(function (err, req, res, next) {
//     console.error(err.stack)
//     res.status(500)
//     res.render('500')
// })

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

app.get('/foo', function (req, res) {
    res.render('foo', {layout: null})
})



app.use(function (req, res) {
    res.status(404).render("404")
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).render("500")
})



app.listen(app.get('port'), function () {
    console.log('running in port 5000')
})