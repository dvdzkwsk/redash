const test       = require('ava')
    , { juxt
      , add
      , inc
      , multiply
      , divide
      , dec
    }            = require('../dist/redash')

test('correctly applies a single value to a list of functions', (t) => {
  t.deepEqual(juxt([
    inc
  , dec
  , x => x * 3
  ])(2), [3, 1, 6])
})

test('correct applies multiple values to a list of functions', (t) => {
  t.deepEqual(juxt([
    add
  , divide
  , multiply
  ])(2, 4), [6, 2, 8])
})
