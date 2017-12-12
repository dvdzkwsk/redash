const test    = require('ava')
    , { sum } = require('../dist/redash')

test('returns the sum of all numbers in a list', (t) => {
  t.is(sum([1, 2, 3, 4, 5, 6]), 21)
})

test('return 0 if the list is empty', (t) => {
  t.is(sum([]), 0)
})
