var inc = Redash.inc

describe('(Function) inc', function () {
  it('Should increment the provided number by 1.', function () {
    inc(0).should.equal(1)
    inc(5).should.equal(6)
    inc(-1).should.equal(0)
  })
})
