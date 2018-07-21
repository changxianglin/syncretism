const fs = require('fs')

const readerStream = fs.createReadStream('input.txt')

const writeStream = fs.createWriteStream('output.txt')

readerStream.pipe(writeStream)

console.log('程序执行完毕...')
