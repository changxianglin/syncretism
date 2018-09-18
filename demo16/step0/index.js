var http = require('http')

var server = http.createServer(function(req, res) {
    setTimeout(function () {
        res.setHeader('content-type', 'text/html')
        res.write('<html><head><meta charset="utf-8"/></head>')
        res.write('<body>')
        res.write('<h1>你好</h1>')
        res.write('</body>')
        res.end()
    }, 2000)
})

console.log('open http://localhost:8080')
server.listen(8080)