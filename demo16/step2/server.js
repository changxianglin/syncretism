var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')

var routes = {
    '/a': function (req, res) {
        res.end(JSON.stringify(req.query))
    },
    '/b': function (req, res) {
        res.end('math /b')
    },
    '/a/c': function (req, res) {
        res.end('math /a/c')
    },
    '/search': function (req, res) {
        res.end('username=' + req.body.username + ',password=' + req.body.passwrod)
    }
}

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
    // staticRoot(path.join(__dirname, 'static'), req, res)
    routePath(req, res)
})

server.listen(8080)
console.log('visit http://localhost:8080')

function routePath(req, res) {
    var pathObj = url.parse(req.url, true)
    console.log(pathObj)
    var handleFn = routes[pathObj.pathname]
    if(handleFn) {
        req.query = pathObj.query
        var body = ''
        req.on('data', function (chunk) {
            body += chunk
        }).on('end', function () {
            req.body = parseBody(body)
            handleFn(req, res)
        })
    } else {
        staticRoot(path.join(__dirname, 'static'), req, res)
    }
}

function parseBody(body) {
    var obj = {}
    body.split('&').forEach(function (str) {
        obj[str.split('=')[0]] = str.split('=')[1]
    })
    return obj
}