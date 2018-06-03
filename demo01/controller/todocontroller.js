module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/todo')
    })
    app.get('/todo', function (req, res) {
        res.render('index')
    })

    app.post('/todos', function (req, res) {
        res.render('post', {data: new Date()})
    })

    app.delete('/todo', function (req, res) {
    //    coding
    })

    app.get('/login', function (req, res) {
        res.render('login')
    })

    app.get('/register', function (req, res) {
        console.log(req.url.split('?')[1])
        res.render('register')
    })
}