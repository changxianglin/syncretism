function* NinjaGenerator() {
  try {
    yield "Hattori"
    fail("The expected exception didn't occur")
  }
  catch(e) {
    console.log(e === "Catch this!", '123321')
  }
}

const ninjaIterator = NinjaGenerator()
const result1 = ninjaIterator.next()

ninjaIterator.throw('Catch this!')
