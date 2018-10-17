var ninja = "Hattori"
console.log(ninja)

function report() {
  var intro = 'Aha'
}

const firstConst = "samurai"
try {
  firstConst = 'ninja'
  fail("Shouldn't be here")
} catch(e) {
  pass("An exception has occurred")
}

const secondConst = {}
secondConst.weapon = "wakizashi"

 const thirdConst = []
 thirdConst.push("Yoshi")
