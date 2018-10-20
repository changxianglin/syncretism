function* NinjaGenerator() {
  try{
    yield "Hattor"
    fail("The expected expected did't occur")
  }
  catch(e) {
    console.log(e === "Catch this")
  }
}

const ninjaIterator = NinjaGenerator()

const result1 = ninjaIterator.next()
console.log(result1.value === 'Hattori')

ninjaIterator.throw("Catch this")
