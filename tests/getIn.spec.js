const test      = require('ava')
    , { getIn } = require('../dist/halcyon')

test('property reports its arity (is binary)', (t) => {
  t.is(getIn.length, 2)
})

test('is curried', (t) => {
  t.is(typeof getIn(['foo']), 'function')
})

test('returns the value at the specified path from the object', (t) => {
  t.is(getIn(['foo', 'bar'], { foo: { bar: 'baz'} }), 'baz')
})

test('respects inherited properties', (t) => {
  function Thing () {}
  Thing.prototype.foo = { bar: 'baz' }

  t.is(getIn(['foo', 'bar'], new Thing()), 'baz')
})

test('returns `undefined` if a property in the path does not exist', (t) => {
  t.is(getIn(['foo', 'bop'], { foo: { bar: 'baz' }}))
})

test('respects null values', (t) => {
  t.is(getIn(['foo', 'bar'], { foo: { bar: null }}), null)
})

// Asserts that `getIn` acts like `get` for the first property.
test('throws if the target object is undefined or null', (t) => {
  t.throws(() => getIn([], undefined), 'The second argument to `getIn` must not be undefined or null.')
  t.throws(() => getIn([], null), 'The second argument to `getIn` must not be undefined or null.')
})
