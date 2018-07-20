const fs = require('fs')

let data = fs.readFileSync('input.txt')

console.log(data.toString())

console.log('程序运行结束!')

// 阻塞代码示例
