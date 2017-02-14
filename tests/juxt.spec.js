const test       = require('ava')
    , { juxt
      , add
      , multiply
      , divide
      , inc
      , dec
    }            = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(juxt.length, 1)
})

test('correctly applies a single value to a list of functions', (t) => {
  t.deepEqual(juxt([
    inc
  , dec
  , multiply(3)
  ])(2), [3, 1, 6])
})

test('correct applies multiple values to a list of functions', (t) => {
  t.deepEqual(juxt([
    add
  , divide
  , multiply
  ])(2, 4), [6, 2, 8])
})
