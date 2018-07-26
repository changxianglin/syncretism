const fs = require('fs')

const rmDirAll = (path) => {
  const getLastCode = (str) => {
    return str.substr(str.length - 1, 1)
  }

  var stats = fs.statSync(path)
  if(stats.isFile()) {
    fs.unlinkSync(path)
    console.log('删除成功: ' + path)
  } else if(stats.isDirectory()) {
    let files = fs.readdirSync(path)

    for(var i = 0, len = files.length; i < len; i++) {
      let item = files[i]
      let itempath = getLastCode(path) == '/' ? path + item : path + '/' + item
      let st = fs.statSync(itempath)
      if(st.isFile()) {
        fs.unlinkSync(itempath)
        console.log('删除成功: ' + itempath)
      } else if(st.isDirectory()) {
        rmDirAll(itempath)
      }
    }
    fs.rmdir(path)
    console.log('删除成功：' + path)
  }
}

rmDirAll('./img')
