const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

// 把page作为参数传递进去，然后调用request进行抓取
function getData(page){
    var url = 'https://cnodejs.org/?tab=all&page='+page;
    console.time(url);
    request(url, function(err, response, body){
        if( !err && response.statusCode == 200 ){
            console.timeEnd(url); // 通过time和timeEnd记录抓取url的时间

            var $ = cheerio.load(body);

            var data = [];
            $('#topic_list .cell').each(function(){
                var $this = $(this);

                data.push({
                    title : trim($this.find('.topic_title').text()),
                    url : trim($this.find('.topic_title').attr('href')),
                    author : trim($this.find('.user_avatar img').attr('title')),
                    reply : trim($this.find('.count_of_replies').text()),
                    visits : trim($this.find('.count_of_visits').text())
                })
            });
            // console.log( JSON.stringify(data, ' ', 4) );
            // console.log(data);
            var filename = './file/cnode_'+page+'.txt';
            fs.writeFile(filename, JSON.stringify(data, ' ', 4), function(){
                console.log( filename + ' 写入成功' );
            })
        }
    });
}

// 删除字符串左右两端的空格
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

const max = 6

for(let i = 0; i <= max; i++) {
  getData(i)
}
