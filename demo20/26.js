function* WeaponGenerator() {
  yield "Katana"
  yield "Kakizashi"
}

const weaponsIterator = WeaponGenerator()

let item
while (!(item = weaponsIterator.next()).done) {
  console.log(item.value)
}
