const fs = require('fs')

let data = ''

const readerStream = fs.createReadStream('input.txt')

readerStream.setEncoding('utf8')

readerStream.on('data', (chunk) => {
  data += chunk
})

readerStream.on('end', () => {
  console.log(data)
})

readerStream.on('error', (err) => {
  console.log(err.stack)
})


console.log('程序处理完毕...')
