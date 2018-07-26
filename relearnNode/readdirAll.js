const fs = require('fs')

let readDirAll = (path) => {
  let getLastCode = (str) => {
    return str.substr(str.length -1, 1)
  }

  var result = []
  var stats = fs.statSync(path)
  if(stats.isFile()) {
    result.push(path)
  } else if(stats.isDirectory()) {
    var files = fs.readdirSync(path)

    for(var i = 0, len = files.length; i < len; i++) {
      var item = files[i],
          itempath = getLastCode(path) == '/' ? path + item : path + '/' + item
      var st = fs.statSync(itempath)
      if(st.isFile()) {
        result.push(itempath)
      } else if(st.isDirectory()) {
        var s = readDirAll(itempath)
        result = result.concat(s)
      }
    }
  }
  return result
}

console.log(readDirAll('./'))
