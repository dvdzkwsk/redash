const test      = require('ava')
    , { range } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(range.length, 2)
})

test('is curried', (t) => {
  t.is(typeof range(1), 'function')
})

test('returns an array of numbers stepped by +1 when start < end', (t) => {
  t.deepEqual(range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('returns an array of numbers stepped by -1 when start > end', (t) => {
  t.deepEqual(range(0, -10), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
})

test('throws when end === start', (t) => {
  t.throws(
    () => range(1, 1),
    'The `start` value provided to `range` must be greater than or less than ' +
    'the `end` value. Received the same value for both: 1.'
  )
})
