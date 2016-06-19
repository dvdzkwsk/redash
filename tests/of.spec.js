var of = Redash.of

describe('(Function) of', function () {
  it('Should wrap the value in an array', function () {
    of('foo')
      .should.deep.equal(['foo'])
  })

  it('Should still wrap an array', function () {
    of(['foo', 'bar'])
      .should.deep.equal([ ['foo', 'bar'] ])
  })
})
