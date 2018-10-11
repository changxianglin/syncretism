function multiMax(first, ...remainingNumbers) {
  var sorted = remainingNumbers.sort(function(a, b) {
    return a - b
  })
  return first * sorted[0]
}


function performAction(ninja, action) {
  return ninja + ' ' + action
}

performAction('Fuma', 'skulking')
performAction('Yoshi', 'skulking')
performAction('Hattori', 'skulking')
performAction('Yagyu', 'sneaking')


function performAction(ninja, action = 'skulking') {
  return ninja + ' ' + action
}


function performAction(ninja, action = 'skulking', message = ninja + ' ' + action) {
  return message
}
