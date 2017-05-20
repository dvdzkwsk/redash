const test          = require('ava')
    , { identical } = require('../dist/redash')
    , implementsSameValueZero = require('./utils/implementsSameValueZero')

test('properly reports its arity (is binary)', (t) => {
  t.is(identical.length, 2)
})

test('is curried', (t) => {
  t.is(typeof identical(1), 'function')
})

test('returns true if primitive values are the same', (t) => {
  t.true(identical(1, 1))
  t.true(identical('hello', 'hello'))
})

test('returns true if primitive values are different', (t) => {
  t.false(identical(1, 0))
  t.false(identical('hello', 'goodbye'))
})

test('returns true if the values occupy the same space in memory', (t) => {
  const obj = {}

  t.true(identical(obj, obj))
})

test('returns false if objects have the same exact shape and values, but occupy different spaces in memory', (t) => {
  t.false(identical({}, {}))
})

implementsSameValueZero(identical, test)
