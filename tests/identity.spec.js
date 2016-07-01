var identity = Redash.identity

describe('(Function) identity', function () {
  it('Should properly report its arity (is unary)', function () {
    identity.should.have.length(1)
  })

  it('Should return the value it is given', function () {
    var obj = {}

    identity(5).should.equal(5)
    identity(obj).should.equal(obj)
  })
})
