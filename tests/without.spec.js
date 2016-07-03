var without = Redash.without

describe('(Function) without', function () {
  it('Should properly report its arity (is binary)', function () {
    without.should.have.length(2)
  })

  it('Should be curried', function () {
    without([1, 2, 3]).should.be.a('function')
  })

  it('Should exclude items in the first list from the second list', function () {
    without([1, 2, 3], [5,  4, 3, 2, 1])
      .should.deep.equal([5, 4])
  })

  it('Should return a new list even if no items are excluded', function () {
    var arr = [1, 2, 3, 4]
      , res = without([], arr)

    arr.should.deep.equal([1, 2, 3, 4])
    res.should.deep.equal([1, 2, 3, 4])
    res.should.not.equal(arr)
  })
})
