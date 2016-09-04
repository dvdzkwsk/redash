const test            = require('ava')
    , { foldr
      , reduceRight } = require('../dist/stdlib')

test('is an alias for `reduceRight`', (t) => {
  t.is(foldr, reduceRight)
})
