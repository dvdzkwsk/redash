const test       = require('ava')
    , { invert } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(invert.length, 1)
})

test('inverts key/value pairs', (t) => {
  t.deepEqual(
    invert({ a: 1, b: 2, c: 3 })
  , { 1: 'a', 2: 'b', 3: 'c' })
})

test('overrides duplicate keys with sequential inversions', (t) => {
  t.deepEqual(invert({ a: 1, b: 1, c: 1 }), { 1: 'c' })
})

test('ignores inherited properties', (t) => {
  function MyClass () {}
  MyClass.prototype.c = () => {}

  const instance = new MyClass()
  instance.a = 1
  instance.b = 2

  t.deepEqual(invert(instance), { 1: 'a', 2: 'b' })
})
