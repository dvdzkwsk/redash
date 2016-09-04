var lens  = Redash.lens
  , set   = Redash.set
  , assoc = Redash.assoc
  , prop  = Redash.prop

describe('(Function) set', (t) => {
  test('be a ternary function that reports its arity', (t) => {
    set.should.have.length(3)
  })

  test('be curried', (t) => {
    set({}, 'foo').should.be.a('function')
  })

  test('call the setter exactly once', (t) => {
    var setter = sinon.spy(assoc('foo'))

    set(lens(prop('foo'), setter), 'BAZ', { foo: 'bar' })
    setter.should.have.been.calledOnce
  })

  test('return the result of the setter', (t) => {
    set(lens(prop('foo'), assoc('foo')), 'BAZ', { foo: 'bar' })
      .should.deep.equal({
        foo: 'BAZ'
      })
  })
})
