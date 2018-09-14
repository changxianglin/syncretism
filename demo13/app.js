const express = require('express')
const nujucks = require('nunjucks')
const bodyParser = require('body-parser')

const fs = require('fs')

const app = express()

app.use(bodyParser().urlencoded({extended: true,}))

nunjucks.configure('templates', {
    autoescape: true,
    express: app
})

var messageList = []

app.get('/', (req, res) => {
    res.send('Hello Express')
})

app.get('/message', (req, res) => {
    console.log('请求方法', req.method)

    console.log('req, query 参数', req.query)

    res.render('message_index.html', {
        messages: messageList,
    })
})

app.post('/message/add', (req, res) => {
    console.log('message_add 请求方法', req.method)

    console.log('request, POST 的 form 表单数据', req.body)

    const msg = {
        content: req.body.msg_post || ''
    }

    messageList.push(msg)
    res.redirect('/message')
})