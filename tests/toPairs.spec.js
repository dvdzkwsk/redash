const test        = require('ava')
    , { toPairs } = require('../dist/stdlib')

test('properly reports its arity (is unary)', (t) => {
  t.is(toPairs.length, 1)
})

test('returns an array of key/value tuples', (t) => {
  t.deepEqual(
    toPairs({ foo: 'bar', baz: 'biz' }),
    [['foo', 'bar'], ['baz', 'biz']])
})

test('ignores inherited properties', (t) => {
  function Foo () {}
  Foo.prototype.foo = function () {}

  const foo = new Foo()
  foo.bar = 'baz'

  t.deepEqual(toPairs(foo), [['bar', 'baz']])
})

test('returns an empty array if the object is empty', (t) => {
  t.deepEqual(toPairs({}), [])
})
