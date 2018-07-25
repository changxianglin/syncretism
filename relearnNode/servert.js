const http = require('http')
const url = require('url')
const starter = require('./starter')
const uploader = require('./uploader')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  console.log(pathname)

  let routeurl = {
    '/': starter.start,
    '/show': uploader.upload
  }

  if(typeof routeurl[pathname] === 'function') {
    routeurl[pathname](req, res)
  } else {
    console.log('404 not found')
    res.end()
  }
}).listen(3000)

console.log('app run port 3000')
