const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/index2.html', (req, res) => {
  res.sendFile(__dirname + '/' + 'index2.html')
})

app.get('/process_get', (req, res) => {
  let response = {
    'first_name': req.query.first_name,
    'last_name': req.query.last_name
  }

  console.log(response)
  res.end(JSON.stringify(response))
})

const server = app.listen(8081, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('应用实例，访问地址为 http://%s:%s', host, port)
})
