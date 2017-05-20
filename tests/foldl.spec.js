const test        = require('ava')
    , { foldl
      , reduce  } = require('../dist/redash')

test('is an alias for `reduce`', (t) => {
  t.is(foldl, reduce)
})
