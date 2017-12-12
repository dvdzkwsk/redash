const test    = require('ava')
    , { inc } = require('../dist/redash')

test('increments the provided number by 1', (t) => {
  t.is(inc(0), 1)
  t.is(inc(5), 6)
  t.is(inc(-1), 0)
})
