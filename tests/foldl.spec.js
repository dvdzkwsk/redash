const test        = require('ava')
    , { foldl
      , reduce  } = require('../dist/halcyon')

test('is an alias for `reduce`', (t) => {
  t.is(foldl, reduce)
})
