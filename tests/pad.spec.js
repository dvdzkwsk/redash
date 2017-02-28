const test    = require('ava')
    , { pad } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(pad.length, 3)
})

test('is curried', (t) => {
  t.is(typeof pad(5, ' '), 'function')
})

test('pads the string to the target length', (t) => {
  t.is(pad(6, 'X', 'hi'), 'XXhiXX')
})

test('prefers padding to the left', (t) => {
  t.is(pad(5, 'X', 'hi'), 'XXhiX')
})

test('noops if the string is already at the target length', (t) => {
  t.is(pad(5, 'X', 'hello'), 'hello')
})

test('noops if the string is already above the target length', (t) => {
  t.is(pad(3, 'X', 'hello'), 'hello')
})
