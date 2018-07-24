const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const urlencodeParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'))
app.get('/index.htm', (req, res) => {
  res.sendFile(__dirname + '/' + 'index3.html')
})

app.post('/process_post', urlencodeParser, (req, res) => {
  let response = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name,
  }
  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(8081, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('应用实例, 访问地址为 http://%s:%s', host, port)
})
