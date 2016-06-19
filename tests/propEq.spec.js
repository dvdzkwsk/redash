var propEq = Redash.propEq

describe('(Function) propEq', function () {
  it('Should be a curried ternary function.', function () {
    propEq('foo').should.be.a('function')
    propEq('foo')('bar').should.be.a('function')
  })

  it('Should return true if the target property matches the target value.', function () {
    propEq('foo')('bar')({ foo : 'bar' }).should.equal(true)
    propEq('foo', 'bar')({ foo : 'bar' }).should.equal(true)
  })
})
