var rangeBy = Redash.rangeBy

describe('(Function) rangeBy', function (aaa, bbb, ccc) {
  test('include the lower bound', (t) => {
    rangeBy(1, 1, 10)[0].should.equal(1)
  })

  test('exclude the upper bound', (t) => {
    var xs = rangeBy(1, 1, 10)
    xs.should.have.length(9) // 1,2,3,4,5,6,7,8,9
    xs[xs.length - 1].should.equal(9)
  })

  test('properly reach the upper limit', (t) => {
    rangeBy(2, 0, 10)
      .should.deep.equal([0, 2, 4, 6, 8])
  })

  test('properly handle cases when the incrementor overflows the upper limit', (t) => {
    // make sure it excludes the upper limit when the nex
    rangeBy(3, 1, 10)
      .should.deep.equal([1, 4, 7])

    // make sure it excludes the upper limit when it exceeds it
    rangeBy(3, 1, 11)
      .should.deep.equal([1, 4, 7, 10])
  })

  test('handle negative ranges', (t) => {
    rangeBy(-1, 0, -5)
      .should.deep.equal([0, -1, -2, -3, -4])

    rangeBy(-3, 0, -10)
      .should.deep.equal([0, -3, -6, -9])
  })

  test('return an empty array if the incrementor is 0', (t) => {
    rangeBy(0, 0, 100).should.deep.equal([])
  })

  test('return an empty array if the incrementor is positive but start > end', (t) => {
    rangeBy(1, 10, 0).should.deep.equal([])
  })

  test('return an empty array if the incrementor is negative but start < end', (t) => {
    rangeBy(-1, 0, 10).should.deep.equal([])
  })
})
