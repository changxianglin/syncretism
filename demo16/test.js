const test = function() {
    console.log('元')
}

test.prototype.save = function (add) {
    console.log(add)
}

test.prototype.delete = function (ele) {
    console.log(ele)
}

test.prototype.update = function (ele) {
    console.log(ele)
}

test.prototype.find = function (ele) {
    console.log(ele)
}

module.exports = test