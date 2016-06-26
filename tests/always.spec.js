var always = Redash.always

describe('(Function) always', function () {
  it('Should properly report its arity (is unary)', function () {
    always.should.have.length(1)
  })

  it('Should return a function', function () {
    always(5).should.be.a('function')
  })

  it('The returned function should return the initial value', function () {
    always(5)().should.equal(5)
  })

  it('Should work for multiple invocations', function () {
    var always5 = always(5)

    always5().should.equal(5)
    always5().should.equal(5)
    always5().should.equal(5)
  })
})
