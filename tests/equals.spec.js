const test       = require('ava')
    , { equals } = require('../dist/redash')
    , implementsSameValueZero = require('./utils/implementsSameValueZero')

test('properly reports its arity (is binary)', (t) => {
  t.is(equals.length, 2)
})

test('is curried', (t) => {
  t.is(typeof equals(5), 'function')
})

implementsSameValueZero(equals, test)

// ========================================================
// Coercion
// ========================================================
test('does not coerce values', (t) => {
  t.false(equals(1, '1'))
  t.false(equals(false, 0))
  t.false(equals(true, 'true'))
  t.false(equals([], ''))
  t.false(equals(null, undefined))
})

// ========================================================
// Primitives
// ========================================================
// Numbers
// ------------------------------------
test('correctly handles number literals', (t) => {
  t.true(equals(5, 5))
})

// Strings
// ------------------------------------

// Booleans
// ------------------------------------
test('correctly handles boolean literals', (t) => {
  t.true(equals(true, true))
  t.true(equals(false, false))
  t.false(equals(true, false))
})

test('correctly handles primitives', (t) => {
  t.true(equals(false, false))
  t.true(equals(true, true))
  t.true(equals(5, 5))
  t.true(equals('hello', 'hello'))
})

test('returns true when both values are undefined', (t) => {
  t.true(equals(undefined, undefined))
})

test('returns true when both values are null', (t) => {
  t.true(equals(null, null))
})

test('treats undefined and null as unequal', (t) => {
  t.false(equals(undefined, null))
})

test('returns true when values are referentially equal', (t) => {
  const obj = {}

  t.true(equals(obj, obj))
})

test('deeply compares objects', (t) => {
  t.true(equals({ foo: true }, { foo: true }))
  t.false(equals({ foo: true }, { foo: false  }))
})

test('correctly compares empty objects', (t) => {
  t.true(equals({}, {}))
})

test('deeply compares arrays', (t) => {
  t.true(equals([1, 2, 3, 4], [1, 2, 3, 4]))
  t.false(equals([1, 2, 3, 4], [1, 2, 3, 4, 5]))
})

test('correctly compares empty arrays', (t) => {
  t.true(equals([], []))
})

test('deeply compares objects in arrays', (t) => {
  t.true(equals(
    [{ foo: true }, { foo: true }, { foo: true }]
  , [{ foo: true }, { foo: true }, { foo: true }]
  ))
  t.false(equals(
    [{ foo: true }, { foo: true }, { foo: true }]
  , [{ foo: true }, { foo: true }, { foo: false }]
  ))
})
