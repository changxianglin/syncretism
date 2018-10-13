function whatsMyContext() {return this}
new whatsMyContext()

function Ninja() {
  this.skulk = function() {
    return this
  }
}

var ninja1 = new Ninja()
var ninja2 = new Ninja()

function Ninja() {
  this.skulk = function() {
    return true
  }
}

var puppet = {
  rules: false
}

function Emperor() {
  this.rules = true
  return puppet
}

var emperor = new Emperor()

function Emperor() {
  this.rules = true
  return puppet
}

var emperor = new Emperor()
