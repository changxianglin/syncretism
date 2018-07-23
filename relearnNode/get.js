const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plian; charset=utf-8'})
  res.end(util.inspect(url.parse(req.url, true)))
}).listen(3000)
