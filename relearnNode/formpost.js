const http = require('http')
const querystring = require('querystring')

http.createServer((req, res) => {
  let html = `
      <html>
      <head>
      <meta charset = "utf-8" />
      </head>
      <body>
      <form action = "/" method = "post">
      <p>username: <input type = "name" name = "username" /></p>
      <p>password: <input type = "password" name = "password" /></p>
      <p>age: <input type = "text" name = "age" /></p>
      <p><input type = "submit" value = "submit" name = "submit" /></p>
      </form>
      </body>
      </html>`

    if(req.method.toLowerCase() == 'post') {
      let postData = ''

      req.addListener('data', (chunk) => {
        postData += chunk
      })

      req.addListener('end', () => {
        let data = querystring.parse(postData)
        console.log('postData: ' + postData )
        console.log(data)

        let s = `<p><a href = "/">back</a></p>
                <p>username: ${data.username}</p>
                <p>password: ${data.password}</p>
                <p>age: ${data.age}</p>`

        res.writeHead(200, {'content-type': 'text/html'})
        res.write(s)
        res.end()
      })
    } else {
      res.writeHead(200, {'content-type': 'text/html'})
      res.write(html)
      res.end()
    }
}).listen(3000)

console.log('app run port 3000')
