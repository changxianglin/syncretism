let promise2 = new Promise(function (resolve, reject) {
    console.log('Promise')
    resolve()
    setTimeout(function () {
        console.log('setTimeout')
    }, 2 * 1000)
})

promise2.then(function () {
    console.log('resolved.')
})

console.log('Hi!')