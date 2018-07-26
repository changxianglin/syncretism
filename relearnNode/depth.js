const fs = require('fs')

const readDirAll = (path, depth) => {

  var getLastCode = (str) => {
    return str.substr(str.length - 1, 1)
  }

  depth = depth || 0
  var fir_code = ''

  for(var j = 0; j < depth; j++) {
    fir_code += '      '
  }
  depth && (fir_code += '|---')

  var stats = fs.statSync(path)
  if(stats.isFile()) {
    console.log(fir_code + path)
  } else if(stats.isDirectory()) {
    var files = fs.readdirSync(path)
    for(var i = 0, len = files.length; i < len; i++) {
      var item = files[i]
      var itempath = getLastCode(path) == '/' ? path + item : path + '/' + item
      var st = fs.statSync(itempath)

      console.log(fir_code + item)

      if(st.isDirectory()) {
        var s = readDirAll(itempath, depth + 1)
      }
    }
  }
}

console.log(readDirAll('./'))
