const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile('img/1532534784754.png', 'binary', (err, data) => {
    if(err) {
      return console.log(err)
    }
    res.writeHead(200, {'content-type': 'image/png'})
    res.write(data, 'binary')
    res.end()
  })
}).listen(3000)


console.log('app run port 3000')
