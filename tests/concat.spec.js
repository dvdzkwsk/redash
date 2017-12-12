const test       = require('ava')
    , { concat } = require('../dist/redash')

test('concatenates the second array onto the first', (t) => {
  t.deepEqual(concat([1, 2, 3], [4, 5, 6]), [1, 2, 3, 4, 5, 6])
})

test('works if the first array is empty', (t) => {
  t.deepEqual(concat([], [1, 2, 3]), [1, 2, 3])
})

test('works if the second array is empty', (t) => {
  t.deepEqual(concat([1, 2, 3], []), [1, 2, 3])
})

test('produces an empty array if both arrays are empty', (t) => {
  t.deepEqual(concat([], []), [])
})

test('returns a new array even if the there was no change', (t) => {
  const as = [1, 2, 3]
      , bs = []
      , res = concat(as, bs)

  t.not(res, as)       // compare references
  t.deepEqual(res, as) // compare values
})

test('performs string concatenation when the first argument is a string', (t) => {
  t.is(concat('foo', 'bar'), 'foobar')
})

test('performs object merging when the first argument is an object', (t) => {
  t.deepEqual(concat({ a: 1 }, { b: 2, c: 3, a: 0 }), { a: 0, b: 2, c: 3 })
})
