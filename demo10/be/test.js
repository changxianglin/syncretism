const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()


app.use(cookieParser())

const port = 5000
var num = 0

app.get('/', (req, res) => {

    if(req.cookies.isVisit) {
        console.log(req.cookies, num++)
        res.send('欢迎再次光临')
    } else {
        res.cookie('isVisit', 1, {maxAge: 60 * 1000, httpOnly: true})
        res.send('欢迎初次光临')
    }
})


app.listen(port, () => {
    console.log(`app running ${port} port`)
})