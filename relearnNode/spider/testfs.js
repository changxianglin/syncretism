const request = require('request')
const fs = require('fs')
const mkdirp = require('mkdirp')


// request('http://www.baidu.com/', function(error, response, body) {
//   console.log('error', error)
//   console.log('statusCode', response && response.statusCode)
//   console.log('body', body)
//   fs.writeFile('req.txt', body, (err, stats) => {
//     if(err) throw err
//     console.log('OK')
//   })
// })

// request('https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0A/0F/ChMkJ1tFZQKIU-mEABLiJ_5aa0AAApmNQJEw4wAEuI_739.jpg')
// .pipe(fs.createWriteStream('./images/1.jpg'))


 // fs.stat('./images/2.jpg', (err, stats) => {
 //   // console.log(stats)
 //   if(err) {
 //     console.log('error', err)
 //   }
 //   console.log('________')
 // })


 // var result = fs.accessSync('./images/2.jpg')
 //
 // console.log('读取文件', result)

 try {
  fs.accessSync('./images/2.jpg', fs.constants.R_OK | fs.constants.W_OK);
  console.log('可读可写');
} catch (err) {
  console.error('不可访问！');
}

try {
  var content = fs.accessSync('./images/3.jpg', fs.constants.R_OK | fs.constants.W_OK);
  console.log('文件存在', content);
  return content
} catch (err) {
  console.error('不存在！', err);
}

console.log('result', content)

 // const msg = fs.statSync('./images/5.jpg')
 //
 // console.log('msgmsgmsg', msg)
