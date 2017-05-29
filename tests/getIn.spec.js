const test      = require('ava')
    , { getIn } = require('../dist/redash')

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

test('respects falsy values', (t) => {
  t.is(getIn(['foo', 'bar'], { foo: { bar: null }}), null)
  t.is(getIn(['foo', 'bar'], { foo: { bar: false }}), false)
  t.is(getIn(['foo', 'bar'], { foo: { bar: 0 }}), 0)
})

test('returns undefined if the target is nil', (t) => {
  t.is(getIn(['foo'], null), undefined)
})
