const test            = require('ava')
    , { foldr
      , reduceRight } = require('../dist/halcyon')

test('is an alias for `reduceRight`', (t) => {
  t.is(foldr, reduceRight)
})
