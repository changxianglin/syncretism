const fs = require('fs')

fs.readFile('input.txt', (err, data) => {
  if(err) return console.error(err)
  console.log(data.toString())
})


console.log('程序运行结束..')


// 回调非阻塞示例
