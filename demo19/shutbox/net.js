var net = require('net')
net.createServer(function(socket) {
  socket.write('Hello world!')
  socket.end()
}).listen(1337)

console.log('app running in port 1337')
