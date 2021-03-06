const fs = require('fs')
const buf = new Buffer.alloc(1024)

console.log('准备打开已经存在的文件！')
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) {
      return console.error(err)
    }

    console.log('文件打开成功')
    console.log('准备读取文件')

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
      if(err) {
        console.log(err)
      }
      console.log(bytes + '字节被读取')

      if(bytes > 0) {
        console.log(buf.slice(0, bytes).toString())
      }
    })

    fs.close(fd, (err) => {
      if(err) {
        console.log(err)
      }
      console.log('文件夹关闭成功')
    })

    console.log('run end')
})
