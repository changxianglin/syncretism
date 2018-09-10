const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: false}))


app.use("/testSetcookie", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");

    //获取cookie
    console.log(req.cookies);

    //设置cookie,关闭签名
    res.cookie("user", {username: req.body.username}, {maxAge: 600000 , httpOnly: true, 'signed': false});

    res.json({
        result: 'success'
    })
});



var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
