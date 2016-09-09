const test      = require('ava')
    , { merge } = require('../dist/stdlib')

test('properly report its arity (is binary)', (t) => {
  t.is(merge.length, 2)
})

test('is curried', (t) => {
  t.is(typeof merge({}), 'function')
})

test('merges all own properties of the second argument onto the first', (t) => {
  t.deepEqual(
    merge({ foo: 'bar' }, { fiz: 'baz' })
  , { foo: 'bar', fiz: 'baz' })
})

test('does not mutate either object', (t) => {
  const a = { foo: 'bar' }
      , b = { fiz: 'baz' }
      , c = merge(a, b)

  t.deepEqual(a, { foo: 'bar' })
  t.deepEqual(b, { fiz: 'baz' })
  t.deepEqual(c, { foo: 'bar', fiz: 'baz' })
})

test('ignores inherited properties', (t) => {
  function Foo () {}
  Foo.prototype.bar = 'bar'
  
  const foo = new Foo()
  foo.baz = 'baz'

  t.deepEqual(merge(foo, {}), { baz: 'baz' })
})
