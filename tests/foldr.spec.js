const test            = require('ava')
    , { foldr
      , reduceRight } = require('../dist/redash')

test('is an alias for `reduceRight`', (t) => {
  t.is(foldr, reduceRight)
})
