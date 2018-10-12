function skukl(name) {}
function Ninja(name) {}


function ninja() {}
ninja()

var samurai = function() {}
samurai()

(function() {})()


function ninja() {
  return this
}

function samurai() {
  "use strict"
  return this
}


var ninja = {}
ninja.skulk = function() {}
ninja.skulk()



function whatsMyContext() {
  return this
}

var ninja1 = {
  getMyThis: whatsMyContext
}

var ninja2 = {
  getMyThis: whatsMyContext
}
