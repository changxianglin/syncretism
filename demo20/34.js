function* NinjaGenerator(action) {
  yield "Hattori " + action
  return "Yoshi " + action
}

const ninjaIterator = NinjaGenerator("skulk")
const result1 = ninjaIterator.next()
const result2 = ninjaIterator.next()

console.log('1', result1.value, '2', result2.value)
