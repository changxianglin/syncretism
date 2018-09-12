const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()


app.use(cookieParser())

var num = 0

app.get('/test', (req, res) => {

    if(req.cookies.isVisit) {
        console.log(req.cookies, num++)
        res.send('欢迎再次光临')
    } else {
        res.cookie('isVisit', 1, {maxAge: 60 * 1000})
        res.send('欢迎初次光临')
    }
})


app.listen(5000, () => {
    console.log('app running 5000 port')
})