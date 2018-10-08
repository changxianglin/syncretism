function myFun() {return 1}

myArg => myArg*2

new Function('a', 'b', 'return a + b')

function* myGen(){ yield 1}


// 函数声明和函数表达式

function samurai() {
  return 'samurai here'
}

function niaja() {

  function hiddenNinja() {
    return 'niaja here'
  }

  return hiddenNinja()
}


var a = function() {}
myFunction(function(){})

myFunc(function() {
  return function(){}
})
