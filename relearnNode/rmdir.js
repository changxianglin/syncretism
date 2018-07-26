const fs = require('./tmp', (err) => {
  if(err) {
    console.log('删除文件夹失败')
    throw err
  } else {
    console.log('删除文件夹成功')
  }
})
