var dec = Redash.dec

describe('(Function) dec', function () {
  it('Should decrement the provided number by 1.', function () {
    dec(5).should.equal(4)
    dec(1).should.equal(0)
    dec(0).should.equal(-1)
  })
})
