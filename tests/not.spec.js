var not = Redash.not

describe('(Function) not', function () {
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
})
