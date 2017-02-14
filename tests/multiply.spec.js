const test         = require('ava')
    , { multiply } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(multiply.length, 2)
})

test('is curried', (t) => {
  t.is(typeof multiply(2), 'function')
})

test('multiplies the two arguments together', (t) => {
  t.is(multiply(2, 4), 8)
})
