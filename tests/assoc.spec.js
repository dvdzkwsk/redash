var assoc = Redash.assoc

describe('(Function) assoc', function () {
  it('Should properly report its arity (is ternary)', function () {
    assoc.should.have.length(3)
  })

  it('Should be curried', function () {
    assoc('a')('b').should.be.a('function')
  })

  it('Should replace the property if it already exists', function () {
    assoc('foo', 'baz', { foo: 'bar' })
      .should.deep.equal({ foo: 'baz' })
  })

  it('Should add the property if it does not exist', function () {
    assoc('foo', 'bar', {})
      .should.deep.equal({ foo: 'bar' })
  })

  it('Should not mutate the original object', function () {
    var obj = { foo: 'bar' }
      , res = assoc('foo', 'baz', obj)

    obj.should.deep.equal({ foo: 'bar' })
    res.should.deep.equal({ foo: 'baz' })
  })
})
