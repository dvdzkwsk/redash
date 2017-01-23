const test      = require('ava')
    , { clamp } = require('../dist/redash')

test('properly reports its arity (is ternary)', (t) => {
  t.is(clamp.length, 3)
})

test('is curried', (t) => {
  t.is(typeof clamp(1), 'function')
  t.is(typeof clamp(1, 10), 'function')
})

test('restricts values to the lower bound', (t) => {
  t.is(clamp(1, 10, -5), 1)
})

test('restricts values to the upper bound', (t) => {
  t.is(clamp(1, 10, 15), 10)
})

test('allows values between the lower and upper bound', (t) => {
  t.is(clamp(1, 10, 5), 5)
})
