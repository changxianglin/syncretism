const fs = require('fs')

console.log('查看 /tem 目录')
fs.readdir('/tmp/', (err, files) => {
  if(err) {
    return console.error(err)
  }

  files.forEach((file) => {
    console.log(file)
  })
})
