const test        = require('ava')
    , { isEmpty } = require('../dist/redash')

test('returns true for an array with 0 items', (t) => {
  t.true(isEmpty([]))
})

test('returns false for an array with > 0 items', (t) => {
  t.false(isEmpty([1, 2, 3]))
})

test('returns true for null',  (t) => {
  t.true(isEmpty(null))
})

test('returns true for undefined',  (t) => {
  t.true(isEmpty(undefined))
})

test('returns true for void 0',  (t) => {
  t.true(isEmpty(void 0))
})

test('returns true for a string with a length of 0', (t) => {
  t.true(isEmpty(''))
})

test('returns false for a string with a length > 0', (t) => {
  t.false(isEmpty('a'))
})

test('returns true for 0', (t) => {
  t.true(isEmpty(0))
})

test('returns true for false', (t) => {
  t.true(isEmpty(false))
})

test('returns false for true', (t) => {
  t.false(isEmpty(true))
})

test('returns true for an object with 0 keys', (t) => {
  t.true(isEmpty({}))
})

test('returns false for an object with > 0 keys', (t) => {
  t.false(isEmpty({ foo: 'bar' }))
})
