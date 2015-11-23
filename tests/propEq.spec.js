var propEq = Daedalus.propEq

describe('(Function) propEq', function () {
  it('Should be a function.', function () {
    expect(propEq).to.be.a('function')
  })
  
  it('Should be curried.', function () {
    expect(propEq('foo')).to.be.a('function')
    expect(propEq('foo')('bar')).to.be.a('function')
  })
  
  it('Should return true if the target property matches the target value.', function () {
    expect(propEq('foo')('bar')({ foo : 'bar' })).to.be.true
    expect(propEq('foo', 'bar')({ foo : 'bar' })).to.be.true
  })
})