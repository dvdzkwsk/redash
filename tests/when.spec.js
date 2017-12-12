const test     = require('ava')
    , { when } = require('../dist/redash')

test('creates a unary function', (t) => {
  t.is(when(() => {}, () => {}).length, 1)
})

test('returns the result of the transformation if the predicate is met', (t) => {
  t.is(when(x => x > 3, x => x * 2)(4), 8)
})

test('returns the original argument if the predicate is not met', (t) => {
  t.is(when(x => x > 3, x => x * 2)(2), 2)
})
