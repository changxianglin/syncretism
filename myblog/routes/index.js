module.exports = function(app) {
  app.get('/', function(req, res) {
    res.redirect('/posts')
  })
  app.use('/signup', require('./singup'))
  app.use('/signin', require('./signin'))
  app.use('/sigout', require('./sigout'))
  app.use('/posts', require('./posts'))
  app.use('/comments', require('./comments'))
}
