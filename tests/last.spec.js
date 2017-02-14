const test     = require('ava')
    , { last } = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(last.length, 1)
})

test('returns the last item in an array', (t) => {
  t.is(last([1, 2, 3]), 3)
  t.is(last([1]), 1)
})

test('returns undefined for an empty array', (t) => {
  t.is(last([]), undefined)
})
