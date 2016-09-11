const test    = require('ava')
    , { lte } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(lte.length, 2)
})

test('is curried', (t) => {
  t.is(typeof lte(5), 'function')
})

test('returns true when the second argument is less than the first', (t) => {
  t.true(lte(10, 5))
  t.true(lte(1, -1))
})

test('returns true when the two arguments are equal', (t) => {
  t.true(lte(5, 5))
})

test('returns false when the second argument is greater than the first', (t) => {
  t.false(lte(-1, 1))
  t.false(lte(5, 10))
})
