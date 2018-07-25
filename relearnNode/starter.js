let start = (req, res) => {
  // let html = `
  //         <html>
  //         <head>
  //         <meta charset = "utf-8" />
  //         </head>
  //         <form action = "/show" method = "post">
  //         <p>username: <input type = "text" name = "username" /></p>
  //         <p>password: <input type = "password" name = "password" /></p>
  //         <p>age: <input type = "text" name = "age" /></p>
  //         <p><input type = "submit" value = "submit" name = "submit" /></p>
  //         </form>
  //         </body>
  //         </html>`
  let html = `
          <html>
          <head>
          <meta charset = "utf-8" />
          </head>
          <form action = "/upload" method = "post" enctype = "multipart/form-data">
          <p>file: <input type = "file" name = "upload" multiple = "multiple" /></p>
          <p><input type = "submit" value = "submit" name = "submit" /></p>
          </form>
          </body>
          </html>`

  res.writeHead(200, {'content-type': 'text/html'})
  res.write(html)
  res.end()
}

exports.start = start
