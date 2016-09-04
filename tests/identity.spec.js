var identity = Redash.identity

describe('(Function) identity', (t) => {
  test('properly report its arity (is unary)', (t) => {
    identity.should.have.length(1)
  })

  test('return the value it is given', (t) => {
    var obj = {}

    identity(5).should.equal(5)
    identity(obj).should.equal(obj)
  })
})
