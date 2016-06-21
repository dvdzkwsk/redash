var rangeBy = Redash.rangeBy

describe('(Function) rangeBy', function (aaa, bbb, ccc) {
  it('Should include the lower bound', function () {
    rangeBy(1, 1, 10)[0].should.equal(1)
  })

  it('Should exclude the upper bound', function () {
    var xs = rangeBy(1, 1, 10)
    xs.should.have.length(9) // 1,2,3,4,5,6,7,8,9
    xs[xs.length - 1].should.equal(9)
  })

  it('Should properly reach the upper limit', function () {
    rangeBy(2, 0, 10)
      .should.deep.equal([0, 2, 4, 6, 8])
  })

  it('Should properly handle cases when the incrementor overflows the upper limit', function () {
    // make sure it excludes the upper limit when the nex
    rangeBy(3, 1, 10)
      .should.deep.equal([1, 4, 7])

    // make sure it excludes the upper limit when it exceeds it
    rangeBy(3, 1, 11)
      .should.deep.equal([1, 4, 7, 10])
  })

  it('Should handle negative ranges', function () {
    rangeBy(-1, 0, -5)
      .should.deep.equal([0, -1, -2, -3, -4])

    rangeBy(-3, 0, -10)
      .should.deep.equal([0, -3, -6, -9])
  })

  it('Should return an empty array if the incrementor is 0', function () {
    rangeBy(0, 0, 100).should.deep.equal([])
  })

  it('Should return an empty array if the incrementor is positive but start > end', function () {
    rangeBy(1, 10, 0).should.deep.equal([])
  })

  it('Should return an empty array if the incrementor is negative but start < end', function () {
    rangeBy(-1, 0, 10).should.deep.equal([])
  })
})
