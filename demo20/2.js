function useless(ninjaCallback) {
  return ninjaCallback()
}


var text = 'Demo arigato!'
report('Before defining functions')

function useless(ninjaCallback) {
  report('In useless function')
  return ninjaCallback()
}

function getText() {
  report('In getText function')
  return text
}

report('Before making all the calls')

assert(useless(getText)) === text

report('After the calls have been made')
