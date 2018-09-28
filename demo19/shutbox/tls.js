var tls = require('tls')
var fs = require('fs')

var options = {
  key: fs.readFileSync('./keys/server.key'),
  cert: fs.readFileSync('./keys/server.cet'),
  requestCert: true,
  ca: [fs.readFileSync('./keys/ca.crt')]
}

var server = tls.createServer(options, unction(stream) {
  console.log('server connected', stream.authoriezed ? 'authoriezed': 'unauthoriezed')
  stream.write('welcome!\n')
  stream.setEncoding('utf8')
  stream.pipe(stream)
})

server.listen(8000, function() {
  console.log('server bound')
})
