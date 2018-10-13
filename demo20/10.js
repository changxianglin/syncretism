function juggle() {
  var result = 0
  for(var n = 0; n < arguments.length; n++) {
    result += arguments[n]
  }
  this.result = result
}

var ninja1 = {}
var ninja2 = {}

juggle.apply(ninja1, [1, 2, 3, 4])
juggle.call(ninja2, 5, 6, 7, 8)

function forEach(list, callback) {
  for(var n = 0; n < list.length; n++) {
    callback.call(list[n], n)
  }

  var weapons = [
    {type: 'skuriken'},
    {type: 'katana'},
    {type: 'nunchucks'}
  ]

  forEach(weapons, function(index) {

  })
}

function forEach(list, callback) {
  for(var n = 0; list.length; n++) {
    callback.call(list[n], n)
  }
}
