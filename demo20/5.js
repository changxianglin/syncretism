var values = [0, 3, 2, 5, 7, 4, 8, 1]
values.sort(function(value1, value2) {
  return value1 - value2
})

var values = [0, 3, 2, 5, 7, 4, 8, 1]
values.sort((value1, value2) => value1 - value2)

param => expression

var greet = name => 'Greetings ' + name


var greet = name => {
  var helloString = 'Greetings '
  return helloString + name 
}
