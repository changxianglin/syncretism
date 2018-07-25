// const querystring = require('querystring')
const formidable = require('formidable')
const util = require('util')
const fs = require('fs')

let upload = (req, res) => {
  // let postData = ""

  // req.addListener('data', (chunk) => {
  //   postData += chunk
  // })
  //
  // req.addListener('end', () => {
  //   let data = querystring.parse(postData)
  //   console.log('postData: ' + postData)
  //   console.log(data)
  //
  //   let s = `<p><a href = "/">back</a></p>
  //            <p>username: ${data.username}</p>
  //            <p>password: ${data.password}</p>
  //            <p>age: ${data.age}</p>`
  //
  //   res.writeHead(200, {'content': 'text/html'})
  //   res.write(s)
  //   res.end()
  // })

  if(req.method.toLowerCase() == 'post') {
    let form = new formidable.IncomingForm()

    form.uploadDir = './tmp/'
    form.parse(req, (err, fields, files) => {
      let oldname = files.upload.name
      let newname = Date.now() + oldname.substr(oldname.lastIndexOf('.'))
      fs.renameSync(files.upload.path, './img/' + newname)

      res.writeHead(200, {'content-type': 'text/html'})

      let s = '<p><a href = "/">back</a></p><img src = "/show?src=' + newname + '" /></p> '
      res.write(s)
      res.end()
    })
    return
  }
}

exports.upload = upload
