const test         = require('ava')
    , { multiply } = require('../dist/redash')

test('multiplies the two arguments together', (t) => {
  t.is(multiply(2, 4), 8)
})
