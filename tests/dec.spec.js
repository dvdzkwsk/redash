const test    = require('ava')
    , { dec } = require('../dist/halcyon')

test('decrements the provided number by 1', (t) => {
  t.is(dec(5), 4)
  t.is(dec(1), 0)
  t.is(dec(0), -1)
})
