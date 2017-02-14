const test        = require('ava')
    , { rangeBy } = require('../dist/halcyon')

test('properly reports its arity (is ternary)', (t) => {
  t.is(rangeBy.length, 3)
})

test('is curried', (t) => {
  t.is(typeof rangeBy(1, 1), 'function')
})

test('includes the lower bound', (t) => {
  t.is(rangeBy(1, 1, 3)[0], 1)
})

test('exclude the upper bound', (t) => {
  const res = rangeBy(1, 1, 3)

  t.is(res.length, 2)
  t.is(res[res.length - 1], 2)
})

test('does not exceed the upper limit', (t) => {
  t.deepEqual(rangeBy(3, 0, 11), [0, 3, 6, 9])
})

test('allows negative steps', (t) => {
  t.deepEqual(rangeBy(-1, 0, -5), [0, -1, -2, -3, -4])
})

test('throws when end === start', (t) => {
  t.throws(
    () => rangeBy(5, 2, 2),
    'The `start` value provided to `rangeBy` must be greater than or less than ' +
    'the `end` value. Received the same value for both: 2.'
  )
})

test('throws when the incrementor is 0', (t) => {
  t.throws(
    () => rangeBy(0, 0, 100),
    'The `increment` value provided to `rangeBy` must be a non-zero number.'
  )
})

test('throws when the incrementor is positive and start is greater than end', (t) => {
  const start = 10
      , end   = 5
      , inc   = 1

  t.throws(
    () => rangeBy(inc, start, end),
    'The `increment` value provided to `rangeBy` must be negative when ' +
    'the start value (' + start + ') is greater than the end value (' +
    end + '). Received: ' + inc + '.'
  )
})

test('throws when the incrementor is negative and start is less than end', (t) => {
  const start = 1
      , end   = 5
      , inc   = -1

  t.throws(
    () => rangeBy(inc, start, end),
    'The `increment` value provided to `rangeBy` must be positive when ' +
    'the start value (' + start + ') is less than the end value (' +
    end + '). Received: ' + inc + '.'
  )
})
