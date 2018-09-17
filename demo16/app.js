const express = require('express')
const https  = require('https')
const app = express()

const config = {
    port: 5000
}

const option = {
    hostname: 'www.baidu.com',
    port: 443,
    path: '/',
    method: 'get'
}

app.get('/', (req, res) => {
    res.send('start first apge')
})

var str = ''

var reqResult = function () {
    let result = https.request(option, (res) => {
        res.on('data', (data) => {
            str += data
            console.log(str += data)
        })
    })
    result.end()
}

app.get('/baidu', (req, res) => {
    async reqResult()
    await res.send(str)
})

app.listen(config.port, () => {
    console.log(`app running in ${config.port} port`)
})