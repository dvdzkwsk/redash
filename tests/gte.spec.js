const test    = require('ava')
    , { gte } = require('../dist/redash')

test('properly reports its arity (is binary)', (t) => {
  t.is(gte.length, 2)
})

test('is curried', (t) => {
  t.is(typeof gte(5), 'function')
})

test('returns true when the second argument is greater than the first', (t) => {
  t.true(gte(5, 10))
  t.true(gte(-1, 1))
})

test('returns true when the two arguments are equal', (t) => {
  t.true(gte(5, 5))
})

test('returns false when the second argument is less than the first', (t) => {
  t.false(gte(5, 0))
})
