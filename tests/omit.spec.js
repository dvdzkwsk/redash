const test     = require('ava')
    , { omit } = require('../dist/halcyon')

test('properly reports its arity (is binary)', (t) => {
  t.is(omit.length, 2)
})

test('is curried', (t) => {
  t.is(typeof omit(['a']), 'function')
})

test('omits the listed properties from the resulting object', (t) => {
  t.deepEqual(
    omit(['a', 'b'], { a: true, b: true, c: true, d: true }),
    { c: true, d: true })
})

test('does not mutate the original object', (t) => {
  const obj = { a: true, b: true, c: true, d: true }

  omit(['a', 'b'], obj)
  t.deepEqual(obj, { a: true, b: true, c: true, d: true })
})

test('does not ignore inherited properties', (t) => {
  function MyClass () {}
  MyClass.prototype.foo = () => {}

  const instance = new MyClass()
  instance.bar = 'bar'
  instance.baz = 'baz'

  t.deepEqual(omit(['bar'], instance), { foo: MyClass.prototype.foo, baz: 'baz' })
})
