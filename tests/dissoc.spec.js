var dissoc = Redash.dissoc

describe('(Function) dissoc', function () {
  it('Should properly report its arity (is binary)', function () {
    dissoc.should.have.length(2)
  })

  it('Should be curried', function () {
    dissoc('a').should.be.a('function')
  })

  it('Should remove the target key from the object', function () {
    dissoc('foo', { foo: true,  baz: true })
      .should.deep.equal({
        baz: true
      })
  })

  it('Should work if the key does not exist', function () {
    dissoc('foo', {})
      .should.deep.equal({})
  })

  it('Should not mutate the original object', function () {
    var obj = { foo: true }
      , res = dissoc('foo', obj)

    obj.should.deep.equal({ foo: true })
    res.should.deep.equal({})
  })

  it('Should produce a new object even if the operation is noop', function () {
    var obj = {}
      , res = dissoc('foo', obj)

    obj.should.deep.equal({})
    res.should.deep.equal({})
    res.should.not.equal(obj) // compare references
  })
})
