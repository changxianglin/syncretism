let promise2 = new Promise(function (resolve, reject) {
    console.log('Promise')
    resolve()
})

promise2.then(function () {
    console.log('resolved.')
})

console.log('Hi!')