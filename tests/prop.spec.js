const test          = require('ava')
    , { get, prop } = require('../dist/halcyon')

test('is an alias of `get`', (t) => {
  t.is(prop, get)
})
