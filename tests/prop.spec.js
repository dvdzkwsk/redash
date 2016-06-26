var prop = Redash.prop

describe('(Function) prop', function () {
  it('Should be a curried binary function', function () {
    prop('foo').should.be.a('function')
  })

  it('Should return the requested property off of the object', function () {
    prop('foo', { foo: 'bar' }).should.equal('bar')
  })

  it('Should return undefined when the property is not defined', function () {
    expect(prop('foo', {})).to.equal(undefined)
  })
})
