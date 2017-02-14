const test     = require('ava')
    , { when } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(when.length, 2)
})

test('is curried', (t) => {
  t.is(typeof when(() => {}), 'function')
})

test('creates a unary function', (t) => {
  t.is(when(() => {}, () => {}).length, 1)
})

test('returns the result of the transformation if the predicate is met', (t) => {
  t.is(when(x => x > 3, x => x * 2)(4), 8)
})

test('returns the original argument if the predicate is not met', (t) => {
  t.is(when(x => x > 3, x => x * 2)(2), 2)
})
