const http = require('http')

http.createServer((req, res) => {
  let html = `
    <html>
    <meta charset = "utf-8">
    <body>
    <form action = "/" method = "post">
    <p>username: <input type = "text" name = "username" /></p>
    <p>password: <input type = "password" name = "password" /></p>
    <p>age: <input type = "text" name = "age" /> </p>
    <p><input type = "submit" value = "submit" name = "submit" /></p>
    </form>
    </body>
    </html>`

    res.writeHead(200, {'content-type': 'text/html'})
    res.write(html)
    res.end()
}).listen(3000)

console.log('app run port 3000')
