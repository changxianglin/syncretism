const ninjaPromise = new Promise((resolve, reject) => {
  resolve("Hattori")
})

ninjaPromise.then(ninja => {
  console.log(ninja === "Hattori", "We were promise Hattori!")
}, err => {
  fail("There shouldn't be an error ")
})
