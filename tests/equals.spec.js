var equals = Redash.equals

describe('(Function) equals', function () {
  it('Should properly report its arity (is binary)', function () {
    equals.should.have.length(2)
  })

  it('Should be curried', function () {
    equals(5).should.be.a('function')
  })

  it('Should return true when values are equal', function () {
    equals(5, 5).should.equal(true)
    equals('hello', 'hello').should.equal(true)
    equals(true, true).should.equal(true)
  })

  it('Should return false when values are not equal', function () {
    equals(5, 0).should.equal(false)
    equals('', 'hello').should.equal(false)
    equals({}, []).should.equal(false)
  })

  it('Should compare objects by reference', function () {
    var a = {}

    equals(a, a).should.equal(true)
    equals(a, {}).should.equal(false)
  })
})
