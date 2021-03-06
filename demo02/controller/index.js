var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 定义网站主页的路由
router.get('/', function(req, res, next) {
    res.render('index')
});
// 定义 about 页面的路由
router.get('/about', function(req, res, next) {
    res.render('about');
});

// 定义 login 页面的路由
router.get('/login', function (req, res, next) {
    res.render('login')
})
module.exports = router;