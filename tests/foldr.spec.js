const test            = require('ava')
    , { foldr
      , reduceRight } = require('../dist/fp-standard')

test('is an alias for `reduceRight`', (t) => {
  t.is(foldr, reduceRight)
})
