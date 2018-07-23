console.info('程序开始执行')

let counter = 10
console.log('计数: %d', counter)

console.time('获取数据')

sum = () => {
  console.log('执行了一些代码')
}

sum()

console.timeEnd('获取数据')

console.info('执行执行完毕。。。')
