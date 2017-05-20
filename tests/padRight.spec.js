const test         = require('ava')
    , { padRight } = require('../dist/redash')

test('properly reports its arity (is ternary)', (t) => {
  t.is(padRight.length, 3)
})

test('is curried', (t) => {
  t.is(typeof padRight(5, ' '), 'function')
})

test('pads the string to the target length', (t) => {
  t.is(padRight(5, 'X', 'hi'), 'hiXXX')
})

test('noops if the string is already at the target length', (t) => {
  t.is(padRight(5, 'X', 'hello'), 'hello')
})

test('noops if the string is already above the target length', (t) => {
  t.is(padRight(3, 'X', 'hello'), 'hello')
})
