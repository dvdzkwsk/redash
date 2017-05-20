const test            = require('ava')
    , { getIn, path } = require('../dist/redash')

test('is an alias of `getIn`', (t) => {
  t.is(path, getIn)
})
