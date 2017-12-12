const test      = require('ava')
    , { clamp } = require('../dist/redash')

test('restricts values to the lower bound', (t) => {
  t.is(clamp(1, 10, -5), 1)
})

test('restricts values to the upper bound', (t) => {
  t.is(clamp(1, 10, 15), 10)
})

test('allows values between the lower and upper bound', (t) => {
  t.is(clamp(1, 10, 5), 5)
})
