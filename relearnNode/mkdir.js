const fs = require('fs')

console.log('创建目录/tmp/test/')

fs.mkdir('/tmp/test', (err) => {
  if(err) {
    return console.error(err)
  }

  console.log('目录创建成功.')
})
