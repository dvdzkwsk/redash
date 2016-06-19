var assoc = Redash.assoc

describe('(Function) assoc', function () {
  it('Should be a curried ternary function', function () {
    assoc('a').should.be.a('function')
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
    const obj = { foo: 'bar' }
    const res = assoc('foo', 'baz', obj)

    obj.should.deep.equal({ foo: 'bar' })
    res.should.deep.equal({ foo: 'baz' })
  })
})
