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

        res.end()
    })

}

app.get('/baidu', (req, res) => {
    var str = ''
    const result = https.request(option, (ress) => {
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        // res.setEncoding('utf8');
        ress.on('data', (chunk) => {
            str += chunk
            console.log(`BODY: ${chunk}`);
        });
        ress.on('end', () => {
            console.log('No more data in response.');
        });
    });

    // req.on('error', (e) => {
    //     console.error(`problem with request: ${e.message}`);
    // });

// write data to request body
//     req.write(postData);
    result.end();
    console.log('request to server back', str)
    res.send(str)
})

app.listen(config.port, () => {
    console.log(`app running in ${config.port} port`)
})