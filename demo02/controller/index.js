module.exports = function (app) {
    app.use('/', function (req, res) {
        res.render('index')
    })
    app.use('/login', function (req, res) {
        res.render('login')
    })
}