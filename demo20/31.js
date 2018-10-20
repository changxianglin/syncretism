function* NinjaGenerator(action) {
  const imposter = yield('Hattor ' + action)

  yield ("Yoshi (" + imposter  + ") " + action)
}

const ninjaIterator = NinjaGenerator("skulk")

const result1 = ninjaIterator.next()
console.log(result1.value)

const result2 = ninjaIterator.next("Hanzo")
console.log(result2.value)
