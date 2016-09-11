const test   = require('ava')
    , { gt } = require('../dist/fp-standard')

test('properly reports its arity (is binary)', (t) => {
  t.is(gt.length, 2)
})

test('is curried', (t) => {
  t.is(typeof gt(5), 'function')
})

test('returns true when the second argument is greater than the first', (t) => {
  t.true(gt(5, 10))
  t.true(gt(-1, 1))
})

test('returns false when the two arguments are equal', (t) => {
  t.false(gt(5, 5))
})

test('returns false when the second argument is less than the first', (t) => {
  t.false(gt(5, 0))
})
