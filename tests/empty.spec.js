const test      = require('ava')
    , { empty } = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(empty.length, 1)
})

test('returns [] for an array', (t) => {
  t.deepEqual(empty([1, 2, 3]), [])
})

test('returns {} for an object', (t) => {
  t.deepEqual(empty({ foo: 'bar' }), {})
})

test('returns \'\' for a string', (t) => {
  t.deepEqual(empty('hello!'), '')
})

test('returns undefined for logical true', (t) => {
  t.is(empty(true), undefined)
})

test('returns undefined for logical false', (t) => {
  t.is(empty(false), undefined)
})

test('returns undefined for numbers', (t) => {
  t.is(empty(0), undefined)
  t.is(empty(1), undefined)
  t.is(empty(Infinity), undefined)
})

test('dispatches to an object\'s `empty` method', (t) => {
  t.is(empty({ empty: () => 'TEST' }), 'TEST')
})

test('dispatches to an object\'s constructor\'s `empty` method', (t) => {
  function Foo () {}
  Foo.prototype.empty = () => 'CONSTRUCTOR'
  t.is(empty(new Foo()), 'CONSTRUCTOR')
})

test('prefers an an object\'s `empty` method over its constructor\'s', (t) => {
  function Foo () {}
  Foo.prototype.empty = () => 'CONSTRUCTOR'
  const foo = new Foo()
  foo.empty = () => 'INSTANCE'
  t.is(empty(foo), 'INSTANCE')
})
