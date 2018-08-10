const MongodbClient = require('mongodb').MongoClient

// const url = 'mongodb://localhost:27017/zhangsan' // 注意在条件查询处有 url 则需要注释这行



// 创建集合
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   console.log('db createed')
//   var dbase = db.db('zhangsan')
//   dbase.createCollection('site', (err, res) => {
//     if(err) throw err
//     console.log('创建集合')
//     db.close()
//   })
// })

// 插入一条数据
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var myobj = {name: 'zhangsan', url: 'http://zhourong.space'}
//   dbo.collection('site').insertOne(myobj, (err, res) => {
//     if(err) throw err
//     console.log('插入文档成功')
//     db.close()
//   })
// })

//插入多条数据
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var myobj = [
//     {name: 'lisi', url: 'http://baidu.com'},
//     {name: 'wanger', url: 'http://tencent.com'},
//     {name: 'mazi', url: 'http://ali.com'}
//   ]
//   dbo.collection('site').insertMany(myobj, (err, res) => {
//     if(err) throw err
//     console.log('插入文档的数据'+ res.insertedCount)
//     db.close()
//   })
// })

// 查询数据(所有)
// const url = 'mongodb://localhost:27017/'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   dbo.collection('site').find({}).toArray((err, result) => {
//     if(err) throw err
//     console.log(result)
//     db.close()
//   })
// })

// 指定查询条件
// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var whereStr = {"name": 'zhangsan'}
//
//   dbo.collection('site').find(whereStr).toArray((err, result) => {
//     if(err) throw err
//     console.log(result)
//     db.close()
//   })
// })


// 更新一条数据
// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var whereStr = {'name': 'zhangsan'}
//   var updateStr = {$set: {"url": 'http://github.com/zhangsan'}}
//   dbo.collection('site').updateOne(whereStr, updateStr, (err, res) => {
//     if(err) throw err
//     console.log('更新一个数据成功')
//     db.close()
//   })
// })


// 更新多条数据
// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var whereStr = {'type': 'en'} // 查询条件
//   var updateStr = {$set: {'url': 'http://zhourong.space'}}
//   dbo.collection('site').updateMany(whereStr, updateStr, (err, res) => {
//     if(err) throw err
//     console.log(res.result.nModified + '条文件被更新')
//     db.close()
//   })
// })


// 删除一条数据
// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var whereStr = {'name': 'zhangsan'}
//   dbo.collection('site').deleteOne(whereStr, (err, res) => {
//     if(err) throw err
//     console.log('删除文档成功')
//     db.close()
//   })
// })


// 删除多条数据

// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var whereStr = {'name': 'lisi'}
//   dbo.collection('site').deleteMany(whereStr, (err, res) => {
//     if(err) throw err
//     console.log(res.result.n + '条数据被删除')
//     db.close()
//   })
// })


// 排序(顺序)

// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var mysort = {type: 1}
//
//   dbo.collection('site').find().sort(mysort).toArray((err, res) => {
//     if(err) throw err
//     console.log(res)
//     db.close()
//   })
// })

// 排序(倒序)

// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   var mysort = {type: -1}
//
//   dbo.collection('site').find().sort(mysort).toArray((err, res) => {
//     if(err) throw err
//     console.log(res)
//     db.close()
//   })
// })


// 分页查询

// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   dbo.collection('site').find().limit(2).toArray((err, res) => {
//     if(err) throw err
//     console.log(res)
//     db.close()
//   })
// })


// 跳过查询

// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   dbo.collection('site').find().skip(1).limit(2).toArray((err, res) => {
//     if(err) throw err
//     console.log(res)
//     db.close()
//   })
// })


// 创建集合
// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   dbo.createCollection('test', (err, res) => {
//     if(err) throw err
//     console.log('创建集合成功')
//     db.close()
//   })
// })

// 删除集合

// const url = 'mongodb://localhost:27017'
//
// MongodbClient.connect(url, (err, db) => {
//   if(err) throw err
//   var dbo = db.db('zhangsan')
//   dbo.collection('test').drop((err, delOk) => {
//     if(err) throw err
//     if(delOk) console.log('删除成功')
//     db.close()
//   })
// })
