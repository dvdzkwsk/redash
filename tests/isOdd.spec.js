const test     = require('ava')
  ,  { isOdd } = require('../dist/redash')

test('properly reports its arity (is unary)', (t) => {
  t.is(isOdd.length, 1)
})

test('returns true for odd numbers', (t) => {
  t.true(isOdd(1))
  t.true(isOdd(3))
  t.true(isOdd(5))
})

test('returns false for even numbers', (t) => {
  t.false(isOdd(2))
  t.false(isOdd(4))
  t.false(isOdd(6))
})

test('returns false for NaN', (t) => {
  t.false(isOdd(NaN))
})

test('returns false if the number is not finite', (t) => {
  t.false(isOdd(Infinity))
  t.false(isOdd(-Infinity))
})

test('returns false for non-integers', (t) => {
  t.false(isOdd(2.1))
  t.false(isOdd(4.5))
  t.false(isOdd(6.1))
})

test('returns false for 0', (t) => {
  t.false(isOdd(0))
  t.false(isOdd(+0))
  t.false(isOdd(-0))
})
