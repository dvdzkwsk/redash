const test     = require('ava')
  ,  { isNil } = require('../dist/redash')

test('returns true for `undefined`', (t) => {
  t.true(isNil(undefined))
})

test('returns true for `null', (t) => {
  t.true(isNil(null))
})

test('returns true for `void 0', (t) => {
  t.true(isNil(void 0))
})

test('returns false for all truthy values', (t) => {
  t.false(isNil('hello'))
  t.false(isNil(true))
  t.false(isNil({}))
  t.false(isNil([]))
  t.false(isNil(function () {}))
})

test('returns false for numerical 0', (t) => {
  t.false(isNil(0))
})
