const express = require('express')
const cookieParser = require('cookie-parser')
const util = require('util')

var app = express()
app.use(cookieParser())

app.get('/', (req, res) => {
  console.log("Cookie: " + util.inspect(req.cookies))
})

app.listen(8081, () => {
  console.log('app run port 8081')
})
