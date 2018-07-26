const fs = require('fs')

fs.stat('./test.js', (err, stats) => {
  if(err) {
    console.log('路径错误')
    throw err
  } else {
    console.log(stats)
    console.log('isfile: ' + stats.isfile())
    console.log('isdir: ' + stats.isDirectory())
  }
})
