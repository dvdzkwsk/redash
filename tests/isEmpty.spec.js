const test        = require('ava')
    , { isEmpty } = require('../dist/halcyon')

test('properly reports its arity (is unary)', (t) => {
  t.is(isEmpty.length, 1)
})

test('returns true for an array with 0 items', (t) => {
  t.true(isEmpty([]))
})

test('returns false for an array with > 0 items', (t) => {
  t.false(isEmpty([1, 2, 3]))
})

test('returns false for null',  (t) => {
  t.false(isEmpty(null))
})

test('returns false for undefined',  (t) => {
  t.false(isEmpty(undefined))
})

test('returns false for void 0',  (t) => {
  t.false(isEmpty(void 0))
})

test('returns true for a string with a length of 0', (t) => {
  t.true(isEmpty(''))
})

test('returns false for a string with a length > 0', (t) => {
  t.false(isEmpty('a'))
})

test('returns false for 0', (t) => {
  t.false(isEmpty(0))
})

test('returns true for an object with 0 keys', (t) => {
  t.true(isEmpty({}))
})

test('returns false for an object with > 0 keys', (t) => {
  t.false(isEmpty({ foo: 'bar' }))
})
