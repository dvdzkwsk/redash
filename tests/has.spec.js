const test    = require('ava')
    , { has } = require('../dist/redash')

test('returns `true` when the property exists as an own property on the target object', (t) => {
  t.true(has('hello', { hello: 'foo' }))
})

test('returns `false` when the object does not have the property', (t) => {
  t.false(has('hello', { notHello: 'foo' }))
})

test('does not dispatch to the target object\'s `hasOwnProperty` method', (t) => {
  t.true(has('hello', { hello: 'foo', hasOwnProperty: () => false }))
  t.false(has('hello', { notHello: 'foo', hasOwnProperty: () => true }))
})

test('ignores inherited properties', (t) => {
  function Foo () {}
  Foo.prototype.bar = () => {}
  var foo = new Foo()
  foo.baz = () => {}

  t.false(has('bar', foo))
  t.true(has('baz', foo))
})
