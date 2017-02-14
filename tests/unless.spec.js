const test       = require('ava')
    , { unless } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(unless.length, 2)
})

test('is curried', (t) => {
  t.is(typeof unless(() => {}), 'function')
})

test('returns a unary function', (t) => {
  t.is(typeof unless(() => {}, () => {}), 'function')
  t.is(unless(() => {}, () => {}).length, 1)
})

test('dispatches to the provided fn if the predicate returns false', (t) => {
  t.is(unless(x => x < 5, x => x * 2)(6), 12)
})

test('returns the argument if the predicate returns true', (t) => {
  t.is(unless(x => x < 5, x => x * 2)(2), 2)
})
