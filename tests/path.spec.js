const test            = require('ava')
    , { getIn, path } = require('../dist/halcyon')

test('is an alias of `getIn`', (t) => {
  t.is(path, getIn)
})
