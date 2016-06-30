var isNil = Redash.isNil

describe('(Function) isNil', function () {
  it('Should properly report its arity (is unary)', function () {
    isNil.should.have.length(1)
  })

  it('Should return true for `undefined`', function () {
    isNil(undefined).should.equal(true)
  })

  it('Should return true for `null', function () {
    isNil(null).should.equal(true)
  })

  it('Should return true for `void 0', function () {
    isNil(void 0).should.equal(true)
  })

  it('Should return false for all truthy values', function () {
    isNil('hello').should.equal(false)
    isNil(true).should.equal(false)
    isNil({}).should.equal(false)
    isNil([]).should.equal(false)
    isNil(function () {}).should.equal(false)
  })
})
