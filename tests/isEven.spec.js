const test      = require('ava')
  ,  { isEven } = require('../dist/redash')

test('returns true for even numbers', (t) => {
  t.true(isEven(2))
  t.true(isEven(4))
  t.true(isEven(6))
})

test('returns false for odd numbers', (t) => {
  t.false(isEven(1))
  t.false(isEven(3))
  t.false(isEven(5))
})

test('returns false for NaN', (t) => {
  t.false(isEven(NaN))
})

test('returns false if the number is not finite', (t) => {
  t.false(isEven(Infinity))
  t.false(isEven(-Infinity))
})

test('returns false for non-integers', (t) => {
  t.false(isEven(2.1))
  t.false(isEven(4.5))
  t.false(isEven(6.1))
})

test('returns true for 0', (t) => {
  t.true(isEven(0))
  t.true(isEven(+0))
  t.true(isEven(-0))
})
