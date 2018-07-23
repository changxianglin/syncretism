const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.end('Hello World!')
})

const server = app.listen(8081, () => {
  const host = server.address().address
  const port = server.address().port

  console.log('应用实例, 访问实例为 http://%s:%s', host, port)
})
