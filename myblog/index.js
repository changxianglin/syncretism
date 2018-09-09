const path = require('path')
const express = require('express')
const seesion = require('express-seesion')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const config = require('config-lite')(__dirname)
const routes = require('./routes')
const pkg = require('./package')

const app = express()

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  name: config.seesion.key,
  secret: config.session.secret,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: config.seesion.maxAge
  },
  store: new MongoStore({
    url: config.mongodb
  })
}))

app.use(flash())

routes(app)

app.listen(config.port, function() {
  console.log(`${pka.name} listening on port ${config.port}`)
})
