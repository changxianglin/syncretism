var outerValue = "ninja"

function outerFunction() {

}

outerFunction()


var outerValue = 'samurai'
var later

function innerFunction() {
  var innerValue = 'ninja'

  function innerFunction() {
    later = innerFunction
  }

  outerFunction()
  later()
}
