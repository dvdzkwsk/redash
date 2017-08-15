const test      = require('ava')
  , { matches } = require('../dist/redash')

test('properly report its arity (is ternary)', (t) => {
  t.is(matches.length, 2)
})

test('is curried', (t) => {
  t.is(typeof matches({ id: 1 }), 'function')
})

test('returns true if the spec is a partial match of the target', (t) => {
  t.true(matches({ a: { b: { c: 'hello' } } }, { a: { b: { c: 'hello' } } }))
})

test('returns false if any property does not match', (t) => {
  t.false(matches({ a: { b: 1, c: 2 } }, { a: { b: 1, c: 3 } }))
})

test('returns false if the target is falsy', (t) => {
  t.false(matches({ a: { b: { c: [1, 2, 3] } } }, null))
})

test('compares properties by value', (t) => {
  t.true(matches({ a: { b: [1, 2, 3] } }, { a: { b: [1, 2, 3] } }))
})
