const http = require('http')
const querystring = require('querystring')

let postHTML = `
              <html>
              <head>
              <meta charset="utf-8">
              <title>zhourong.space</title>
              </head>
              <body>
              <form method = "post">
              网站名: <input name = "name"><br>
              网站 URL: <input name = "url"><br>
              <input type = "submit">
              </form>
              </body>
              </html>`

http.createServer((req, res) => {
  let body = ''

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {
    body = querystring.parse(body)

    res.writeHead(200, {'content-type': 'text/html; charset=utf8'})

    if(body.name && body.url) {
      res.write('网站名: ' + body.name)
      res.write('<br>')
      res.write('网站 url: ' + body.url)
    } else {
      res.write(postHTML)
    }
    res.end()
  })
}).listen(3000)
