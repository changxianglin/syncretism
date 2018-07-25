const http = require('http')
const url = require('url')
const starter = require('./starter')
const uploader = require('./uploader')
const shower = require('./shower')
const inter = require('./inter')

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname
  console.log(pathname)

  let routeurl = {
    '/': starter.start,
    '/upload': uploader.upload,
    '/show': shower.show,
    '/inter': inter.init
  }

  if(typeof routeurl[pathname] === 'function') {
    routeurl[pathname](req, res)
  } else {
    console.log('404 not found')
    res.end()
  }
}).listen(3000)

console.log('app run port 3000')
