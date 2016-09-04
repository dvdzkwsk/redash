var lens  = Redash.lens
  , assoc = Redash.assoc
  , prop  = Redash.prop

describe('(Function) lens', (t) => {
  test('be a curried binary function', (t) => {
    lens.should.have.length(2)
    lens(function () {}).should.be.a('function')
  })

  test('return an object with `get` and `set`', (t) => {
    var get = prop('foo')
      , set = assoc('foo')

    lens(get, set)
      .should.deep.equal({
        get: get
      , set: set
      })
  })
})
