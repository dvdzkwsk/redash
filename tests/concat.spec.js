const test       = require('ava')
    , { concat } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(concat.length, 2)
})

test('be curried', (t) => {
  t.is(typeof concat([1, 2, 3]), 'function')
})

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

test('always returns a new array', (t) => {
  const as = [1, 2, 3]
      , bs = []
      , res = concat(as, bs)

  t.not(res, as)       // compare references
  t.deepEqual(res, as) // compare values
})

test('performs string concatenation when the first argument is a string', (t) => {
  t.is(concat('foo', 'bar'), 'foobar')
})
