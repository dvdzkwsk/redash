const test     = require('ava')
    , { head } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(head.length, 1)
})

test('returns the first item in an array', (t) => {
  t.is(head([1, 2, 3]), 1)
})

test('returns undefined if the array is empty', (t) => {
  t.is(head([]), undefined)
})
