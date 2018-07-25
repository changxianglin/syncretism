const url = require('url')

let init = (req, res) => {
  if(req.method.toLowerCase() == 'get') {
    let query = url.parse(req.url, true).query

    let data = {
      "code": 0,
      "msg": "success",
      "data": [{
        "username": "zhangsan",
        "age": 25
      },
      {
        "username": "bing",
        "age": 23
      }]
    }

    if(query && query.callback) {
      res.end(query.callback + '(' + JSON.querystring(data) + ')')
    } else {
      res.end(JSON.stringify(data))
    }
  }
}

exports.init = init
