var lens  = Redash.lens
  , assoc = Redash.assoc
  , prop  = Redash.prop

describe('(Function) lens', function () {
  it('Should be a curried binary function', function () {
    lens.should.have.length(2)
    lens(function () {}).should.be.a('function')
  })

  it('Should return an object with `get` and `set`', function () {
    const get = prop('foo')
    const set = assoc('foo')

    lens(get, set)
      .should.deep.equal({
        get: get,
        set: set
      })
  })
})
