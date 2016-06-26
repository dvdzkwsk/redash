var last = Redash.last

describe('(Function) last', function () {
  it('Should return the last item in an array.', function () {
    last([1, 2, 3]).should.equal(3)
    last([1]).should.equal(1)
  })

  it('Should return undefined for an empty array', function () {
    expect(last([])).to.equal(undefined)
  })
})
