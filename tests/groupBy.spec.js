const test       = require('ava')
    , { groupBy } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(groupBy.length, 2)
})

test('is curried', (t) => {
  t.is(typeof groupBy(() => {}), 'function')
})

test('correctly groups items by key', (t) => {
  t.deepEqual(
    groupBy(
      x => x.age <= 12 ? 'child' : x.age < 18 ? 'teenager' : 'adult',
      [{ age: 5 }, { age: 7 }, { age: 21 }, { age: 15 }, { age: 2 }]
    ),
    {
      child: [{ age: 5 }, { age: 7 }, { age: 2 }]
    , teenager: [{ age: 15 }]
    , adult: [{ age: 21 }]
    }
  )
})

test('returns an empty object if the list is empty', (t) => {
  t.deepEqual(groupBy(() => 'a', []), {})
})
