const fs = require('fs')

let data = '从这里开始写入学习 node 相关的知识， 坚持学习下去， 并且用起来，使用才是学习最高效的方式。'

fs.writeFile('test.txt', data, (err) => {
  if(err) throw err 

  console.log('写入数据成功')
})
