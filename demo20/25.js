function* WeaponGenerator() {
  yield "Katana"
  yield "Wakizashi"
}

const weaponsInterator = WeaponGenerator()

const result1 = weaponsInterator.next()
console.log('1', result1.value, result1.done)

const result2 = weaponsInterator.next()
console.log('2', result2.value, result2.done)

const result3 = weaponsInterator.next()
console.log('3', result3.value, result3.done)
