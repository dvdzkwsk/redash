const test    = require('ava')
    , { add } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(add.length, 2)
})

test('is curried', (t) => {
  t.is(typeof add(5), 'function')
})

test('correctly adds two numbers', (t) => {
  t.is(add(1, 2), 3)
})
