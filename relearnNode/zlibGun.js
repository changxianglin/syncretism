const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('input2.txt'))

console.log('文件解压完成')
