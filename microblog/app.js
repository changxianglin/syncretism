const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const  urlencodedParser = bodyParser.urlencoded({ extended: false })

let html = `
    <form action="/" method="post">
    <input type="text" name="title">
    <br>
    <input type="text" name="content">
    <br>
    <input type="submit" value="submit"> 
    </form>
`

app.get('/post', (req, res) => {
    res.send(html)
})

app.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    let content = req.body.title
    fs.appendFileSync('msg.txt', content + '\r\n', 'utf8')
    let message = `<span>发表成功</span><br>
                    <a href="/">回到首页</a> <a href="/post">再发一个</a>`
    res.send(message)
})

app.get('/', (req, res) => {
    let aticles = fs.readFileSync('msg.txt', 'utf8')
    console.log(aticles)
    let content = aticles ? aticles.split('\r\n') + `<br><a href="/post">去发一个</a>` : `<a href="/post">去发一个</a>`
    res.send(content)
})

app.listen(8089, () => {
    console.log('app running port 8089')
})