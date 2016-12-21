const test     = require('ava')
    , { path } = require('../dist/redash')

test('patherly reports its arity (is binary)', (t) => {
  t.is(path.length, 2)
})

test('is curried', (t) => {
  t.is(typeof path(['foo']), 'function')
})

test('returns the value at the specified path from the object', (t) => {
  t.is(path(['foo', 'bar'], { foo: { bar: 'baz'} }), 'baz')
})

test('respects inherited properties', (t) => {
  function Thing () {}
  Thing.prototype.foo = { bar: 'baz' }

  t.is(path(['foo', 'bar'], new Thing()), 'baz')
})

test('returns `undefined` if a property in the path does not exist', (t) => {
  t.is(path(['foo', 'bop'], { foo: { bar: 'baz' }}))
})

test('respects null values', (t) => {
  t.is(path(['foo', 'bar'], { foo: { bar: null }}), null)
})

// Asserts that `path` acts like `prop` for the first property.
test('throws if the target object is undefined or null', (t) => {
  t.throws(() => path([], undefined), 'The second argument to `path` must not be undefined or null.')
  t.throws(() => path([], null), 'The second argument to `path` must not be undefined or null.')
})
