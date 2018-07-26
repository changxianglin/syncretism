const fs = require('fs')

fs.open(Date.now() + '.txt', 'a+', (err, fd) => {
  if(err) throw err

  console.log(fd)
})
