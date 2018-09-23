var net = require('net')
var redis = require('redis')

var server = net.createServer(function(socket) {
  var subscriber
  var publisher

  socket.on('connect', function() {
    subscriber = redis.createClient()

    subscriber.subscribe('main_chat_room')

    subscriber.on('message', function(channel, message) {
      socket.write('Channel ' + channel + ": " + message )
    })

    publisherm = redis.createClient()
  })

  socket.on('end', function() {
    subscriber.unsubscribe('main_chat_room')
    subscriber.end()
    publisher.end()
  })
})

server.listen(3000)
