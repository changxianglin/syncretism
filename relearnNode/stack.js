const fs = require('fs')

  fs.readFile('inputs.txt', (err, data) => {
    if(err) {
      console.log(err.stack)
      return
    } else {
      console.log(data.toString())
    }
  })

  console.log('程序执行结束..')
