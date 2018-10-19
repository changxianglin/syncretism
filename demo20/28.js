function* IdGenerator() {
  let id = 0
  while (true) {
    yield ++id
  }
}

const idIterator = IdGenerator()

const ninja1 = {id: idIterator.next().value}
const ninja2 = {id: idIterator.next().value}
const ninja3 = {id: idIterator.next().value}

console.log(ninja1.id === 1, 'First ninja has id 1')
console.log(ninja2.id === 2, 'Second ninja has id 2')
console.log(ninja3.id === 3, 'Third ninja has id 3')

// 使用
const ninja4 = {id: idIterator.next().value}
console.log(ninja4.id)
