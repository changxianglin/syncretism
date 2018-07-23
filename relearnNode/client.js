const http = require('http')

const  options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
}

let callback = (res) => {
  let body = ''
  res.on('data', (data) => {
    body += data
  })

  res.on('end', () => {
    console.log(body)
  })
}

 const req = http.request(options, callback)
 req.end()
