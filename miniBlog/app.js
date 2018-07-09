const express = require('express')
var bodyParser = require('body-parser')

const app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

let html = `
<form action = '/app' method = 'post'>
<input type = 'text' name = 'start'>
<br>
<input type = 'text' name = 'finaly'>
<br>
<input type = 'submit' value = 'submit'>
</form>
`

let content = []

app.get('/', (req, res) => {
  let articles = ''
  for(let i = content.length - 1; i >= 0; i--) {
    let text = content[i]
    articles += `<h3>${text}</h3><br>`
  }
  let postContent = `<a href = '/article'>我要发表博文</a>`
  res.send(articles + postContent)
})

app.get('/article', (req, res) => {
  res.send(html)
})

app.post('/app', urlencodedParser, (req, res) => {
  console.log(req.method)
  console.log(req.body)
  content.push(req.body.start)
  let firstPage = `<a href = '/'>回到首页</a><br>`
  let postAgin = `<a href = '/article'>再发一篇</a>`
  res.send(firstPage + postAgin)
})

app.listen(8090, () => {
  console.log('app running port 8090')
})
