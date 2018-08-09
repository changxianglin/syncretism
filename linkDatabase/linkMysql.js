var mysql = require('mysql')
var fs = require('fs')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'hgerp'
})

connection.connect()


var  sql = 'SELECT * FROM sapbd_mvt';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
        var content = result.valueOf()
        console.log('///', end)
      fs.writeFile('data.txt', content, (err) => {
        if(err) throw err
        console.log('获取成功')
      })
       console.log('--------------------------SELECT----------------------------');
       // console.log(result);
       console.log('------------------------------------------------------------\n\n');
});

connection.end();
