const test        = require('ava')
    , { rangeBy } = require('../dist/redash')

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

test('returns an empty array when start === end', (t) => {
  t.deepEqual(rangeBy(-1, 1, 1), [])
})

test('returns an empty array when the step is 0', (t) => {
  t.deepEqual(rangeBy(0, 0, 100), [])
})

test('returns an empty array when step is positive and start is greater than end', (t) => {
  t.deepEqual(rangeBy(1, 10, 5), [])
})

test('returns an empty array when step is negative and start is less than end', (t) => {
  t.deepEqual(rangeBy(-1, 1, 5), [])
})
