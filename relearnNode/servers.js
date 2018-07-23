const http = require('http')
const fs = require('fs')
const url = require('url')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname

  console.log('Request for ' + pathname + ' received.')

  fs.readFile(pathname.substr(1), (err, data) => {
    if(err) {
      console.log(err)

      res.writeHead(200, {'content-type': 'text/html'})
    } else {
      res.writeHead(200, {'content-type': 'text/html'})

      res.write(data.toString())
    }
    res.end()
  })
}).listen(8080)
