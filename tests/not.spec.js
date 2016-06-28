var not = Redash.not

describe('(Function) not', function () {
  it('Should properly report its arity (is unary)', function () {
    not.should.have.length(1)
  })

  it('Should invert the provided value (true -> false, false -> true)', function () {
    not(true).should.equal(false)
    not(false).should.equal(true)
  })

  it('Should handle truthy values', function () {
    not([]).should.equal(false)
    not({}).should.equal(false)
  })

  it('Should handle falsy values', function () {
    not(0).should.equal(true)
    not('').should.equal(true)
    not(null).should.equal(true)
    not(undefined).should.equal(true)
  })

  it('Should handle `void`', function () {
    not(void 0).should.equal(true)
  })

  describe('If the received argument is a function...', function () {
    it('Should return a function', function () {
      not(function () {}).should.be.a('function')
    })

    describe('The returned function...', function () {
      it('Should have the same arity as the original', function () {
        not(function () {}).should.have.length(0)
        not(function (a0) {}).should.have.length(1)
        not(function (a0, a1) {}).should.have.length(2)
        not(function (a0, a1, a2) {}).should.have.length(3)
        not(function (a0, a1, a2, a3) {}).should.have.length(4)
        not(function (a0, a1, a2, a3, a4) {}).should.have.length(5)
      })

      it('Should be curried', function () {
        var fn = not(function (a0, a1, a2) {})

        fn(1).should.be.a('function')
        fn(1, 2).should.be.a('function')
        fn(1, 2, 3).should.not.be.a('function')
      })

      it('Should return the boolean complement of the original return value', function () {
        not(function () { return false })().should.equal(true)
        not(function () { return true })().should.equal(false)
      })

      it('Should properly cast truthy/falsy values', function () {
        not(function () { return '' })().should.equal(true)
        not(function () { return null })().should.equal(true)
        not(function () { return 0 })().should.equal(true)
        not(function () { return undefined })().should.equal(true)

        not(function () { return true })().should.equal(false)
        not(function () { return {} })().should.equal(false)
        not(function () { return [] })().should.equal(false)
        not(function () { return 'hello' })().should.equal(false)
      })
    })
  })
})
