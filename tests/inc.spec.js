var inc = Redash.inc

describe('(Function) inc', (t) => {
  test('properly report its arity (is unary)', (t) => {
    inc.should.have.length(1)
  })

  test('increment the provided number by 1', (t) => {
    inc(0).should.equal(1)
    inc(5).should.equal(6)
    inc(-1).should.equal(0)
  })
})
