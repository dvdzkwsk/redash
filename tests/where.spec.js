const test      = require('ava')
    , { where } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(where.length, 2)
})

test('is curried', (t) => {
  t.is(typeof where({}), 'function')
})

test('returns false if a single spec fails', (t) => {
  t.false(
    where({ name: x => x === 'Michael' },
    { name: 'Dwight' }))
})

test('returns true if all specs are met', (t) => {
  t.true(
    where({ name: x => x === 'Michael', age: x => x >= 18 },
    { name: 'Michael', age: 18 }))
})

test('short circuits', (t) => {
  let calls = 0
  const spec = () => ++calls < 2

  where({ name: spec, age: spec, job: spec, friends: spec }, {})
  t.is(calls, 2)
})
