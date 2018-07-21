const fs = require('fs')

const data = 'zhourong 个人网站地址: www.zhourong.space'

const writeStream = fs.createWriteStream('output.txt')

writeStream.write(data, 'utf8')

writeStream.end()

writeStream.on('finish', () => {
  console.log('写入完成')
})


writeStream.on('error', (err) => {
  console.log(err.stack)
})


console.log('程序执行完毕...')
