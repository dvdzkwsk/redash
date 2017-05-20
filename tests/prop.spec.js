const test          = require('ava')
    , { get, prop } = require('../dist/redash')

test('is an alias of `get`', (t) => {
  t.is(prop, get)
})
