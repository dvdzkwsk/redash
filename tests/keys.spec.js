const test     = require('ava')
    , { keys } = require('../dist/stdlib')

test('properly reports its arity (is unary)', (t) => {
  t.is(keys.length, 1)
})

test('returns all own properties of an object.', (t) => {
  t.deepEqual(keys({
    foo: true
  , bar: function () {}
  , baz: []
  }), ['foo', 'bar', 'baz'])
})

test('excludes inherited properties', (t) => {
  function SomeClass () {}
  SomeClass.prototype.foo = 'foo'

  const obj = new SomeClass()
  obj.baz = true
  obj.bar = true

  t.deepEqual(keys(obj), ['baz', 'bar'])
})
