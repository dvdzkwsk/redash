var range = Redash.range

describe('(Function) range', function () {
  it('Should return an array of numbers, incremented by 1', function () {
    range(0, 10)
      .should.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('Should return an empty array when end === start', function () {
    range(1, 1)
      .should.deep.equal([])
  })

  it('Should return an empty array when end < start', function () {
    range(10, 10).should.deep.equal([])
    range(10, -10).should.deep.equal([])
  })
})
