var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

function staticRoot(staticPath, req, res) {
    var pathObj = url.parse(req.url, true)

    if(pathObj.pathname === '/') {
        pathObj.pathname += 'index.html'
    }

    var filePath = path.join(staticPath, pathObj.pathname)

    // var fileContent = fs.readFileSync(filePath, 'binary')
    // res.write(fileContent, 'binary')
    // res.end()

    fs.readFile(filePath, 'binary', function (err, fileContent) {
        if(err) {
            console.log('404')
            res.writeHead(404, 'not found')
            res.end('<h1>404 not Found</h1>')
        } else {
            console.log('ok')
            res.writeHead(200, 'ok')
            res.write(fileContent, 'binary')
            res.end()
        }
    })
}

var server = http.createServer(function (req, res) {
    staticRoot(path.join(__dirname, 'static'), req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')