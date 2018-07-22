const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plian'})

  let params = url.parse(req.url, true).query
  res.write('网站名：' + params.name)
  res.write('\n')
  res.write('网站 URl：' + params.url)
  res.end()

}).listen(3000)
