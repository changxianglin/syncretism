const http = require('http')

http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.write('hello world')
  res.end()
}).listen(3000)

console.log('app run port 3000')
