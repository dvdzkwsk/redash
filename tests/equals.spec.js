const test       = require('ava')
    , { equals } = require('../dist/stdlib')

test('properly reports its arity (is binary)', (t) => {
  t.is(equals.length, 2)
})

test('is curried', (t) => {
  t.is(typeof equals(5), 'function')
})

test('correctly handles primitives', (t) => {
  t.true(equals(5, 5))
  t.true(equals('hello', 'hello'))
})

test('returns true when values are referentially equal', (t) => {
  const obj = {}

  t.true(equals(obj, obj))
})

test('returns false when values are not referentially equal', (t) => {
  const a = {}
      , b = {}

  t.false(equals(a, b))
})

