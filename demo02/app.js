const express = require('express')

const router = require('./controller/index')

const app = express()

const route = express.Router()

app.set('view engine', 'ejs')

router(route)

app.listen(5000, function () {
    console.log('running in port 5000')
})