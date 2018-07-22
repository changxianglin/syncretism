const fs = require('fs')

console.log('准备写入文件')
fs.writeFile('input2.txt', '我是通过 fs.writeFile 写入文件的内容', (err) => {
  if(err) {
    return console.log(err)
  }

  console.log('写入数据成功')
  console.log('___________我是分割线_____________')
  console.log('读取写入的数据')
  fs.readFile('input2.txt', (err, data) => {
    if(err) {
      return console.error(err)
    }
    console.log('异步读取文件数据：' + data.toString())
  })
})
