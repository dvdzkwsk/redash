const test    = require('ava')
    , { add } = require('../dist/redash')

test('correctly adds two numbers', (t) => {
  t.is(add(1, 2), 3)
})
