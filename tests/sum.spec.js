const test    = require('ava')
    , { sum } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(sum.length, 1)
})

test('returns the sum of all numbers in a list', (t) => {
  t.is(sum([1, 2, 3, 4, 5, 6]), 21)
})

test('return 0 if the list is empty', (t) => {
  t.is(sum([]), 0)
})
