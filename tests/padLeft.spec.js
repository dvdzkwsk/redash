const test        = require('ava')
    , { padLeft } = require('../dist/redash')

test('properly reports its arity (is ternary)', (t) => {
  t.is(padLeft.length, 3)
})

test('is curried', (t) => {
  t.is(typeof padLeft(5, ' '), 'function')
})

test('pads the string to the target length', (t) => {
  t.is(padLeft(5, 'X', 'hi'), 'XXXhi')
})

test('noops if the string is already at the target length', (t) => {
  t.is(padLeft(5, 'X', 'hello'), 'hello')
})

test('noops if the string is already above the target length', (t) => {
  t.is(padLeft(3, 'X', 'hello'), 'hello')
})
