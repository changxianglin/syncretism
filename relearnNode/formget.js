const http = require('http')
url = require('url')

http.createServer((req, res) => {
  let html = `
            <html>
            <head>
            <meta charset = "utf-8" />
            </head>
            <body>
            <form action = "/" method = "get">
            <p>username: <input type = "text" name ="username" /></p>
            <p>password: <input type = "password" name = "password" /></p>
            <p>age: <input  type = "text" name = "age" /></p>
            <p><input type = "submit" value = "submit" name = "submit" /></p>
            </form>
            </body>
            </html>`

    const query = url.parse(req.url, true).query
    if(query.submit) {
      let data = `<p><a href = "/">back</a></p>
                  <p>username: ${query.username}</p>
                  <p>password: ${query.password}</p>
                  <p>age: ${query.age}</p>`

      res.writeHead(200, {'content-type': 'text/html'})
      res.write(data)
    } else {
      res.writeHead(200, {'content-type': 'text/html'})
      res.write(html)
    }
    res.end()
}).listen(3000)

console.log('app run port 3000')
