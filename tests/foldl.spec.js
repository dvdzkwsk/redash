const test        = require('ava')
    , { foldl
      , reduce  } = require('../dist/fp-standard')

test('is an alias for `reduce`', (t) => {
  t.is(foldl, reduce)
})
