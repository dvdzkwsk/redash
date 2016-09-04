const test        = require('ava')
    , { foldl
      , reduce  } = require('../dist/stdlib')

test('is an alias for `reduce`', (t) => {
  t.is(foldl, reduce)
})
