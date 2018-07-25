const fs = require('fs')
const url = require('url')

let show = (req, res) => {
  let query = url.parse(req.url, true).query
  let imgurl = query.src

  fs.readFile('./img/' + imgurl, 'binary', (err, file) => {
    if(err) throw err
    res.writeHead(200, {'content-type': 'image/png'})
    res.write(file, 'binary')
    res.end()
  })
}

exports.show = show
