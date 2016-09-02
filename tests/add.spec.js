const test    = require('ava')
    , { add } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(2, add.length)
})

test('it is curried', (t) => {
  t.is('function', typeof add(5))
})

test('correctly adds two numbers', (t) => {
  t.is(3, add(1, 2))
})
