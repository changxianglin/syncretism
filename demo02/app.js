const express = require('express')

const router = require('./controller/birds')
const index = require('./controller/index')

const app = express()


app.set('view engine', 'ejs')



app.use('/birds', router)

app.use('/', index)

app.listen(5000, function () {
    console.log('running in port 5000')
})