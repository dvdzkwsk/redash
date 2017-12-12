const test      = require('ava')
    , { range } = require('../dist/redash')

test('returns an array of numbers stepped by +1 when start < end', (t) => {
  t.deepEqual(range(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('returns an array of numbers stepped by -1 when start > end', (t) => {
  t.deepEqual(range(0, -10), [0, -1, -2, -3, -4, -5, -6, -7, -8, -9])
})

test('returns an empty array when start === end', (t) => {
  t.deepEqual(range(5, 5), [])
})
