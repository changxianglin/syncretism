var request = require('request'),
    cheerio = require('cheerio');

request('https://cnodejs.org/', function(err, response, body){
    if( !err && response.statusCode == 200 ){
        // body为源码
        // 使用 cheerio.load 将字符串转换为 cheerio(jQuery) 对象，
        // 按照jQuery方式操作即可
        var $ = cheerio.load(body);

        // 输出导航的html代码
        console.log( $('.nav').html() );
    }
});
