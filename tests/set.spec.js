var lens  = Redash.lens
  , set   = Redash.set
  , assoc = Redash.assoc
  , prop  = Redash.prop

describe('(Function) set', function () {
  it('Should be a ternary function that reports its arity', function () {
    set.should.have.length(3)
  })

  it('Should be curried', function () {
    set({}, 'foo').should.be.a('function')
  })

  it('Should call the setter exactly once', function () {
    var setter = sinon.spy(assoc('foo'))

    set(lens(prop('foo'), setter), 'BAZ', { foo: 'bar' })
    setter.should.have.been.calledOnce
  })

  it('Should return the result of the setter', function () {
    set(lens(prop('foo'), assoc('foo')), 'BAZ', { foo: 'bar' })
      .should.deep.equal({
        foo: 'BAZ'
      })
  })
})
