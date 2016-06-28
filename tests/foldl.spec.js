var reduce = Redash.append
  , foldl  = Redash.foldl

describe('(Alias) foldl', function () {
  it('Should be an alias for `reduce`', function () {
    foldl.should.equal(reduce)
  })
})
