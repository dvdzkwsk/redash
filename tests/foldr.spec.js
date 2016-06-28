var reduceRight = Redash.append
  , foldr       = Redash.foldr

describe('(Alias) foldr', function () {
  it('Should be an alias for `reduceRight`', function () {
    foldr.should.equal(reduceRight)
  })
})
