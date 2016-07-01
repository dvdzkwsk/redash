var zipObj = Redash.zipObj

describe('(Function) zipObj', function () {
  it('Should properly report its arity (is binary)', function () {
    zipObj.should.have.length(2)
  })

  it('Should be curried', function () {
    zipObj([1, 2, 3]).should.be.a('function')
  })

  it('Should create an object of key/value pairs', function () {
    zipObj([1, 2, 3, 4, 5, 6, 7], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
      .should.deep.equal({
        1: 'a'
      , 2: 'b'
      , 3: 'c'
      , 4: 'd'
      , 5: 'e'
      , 6: 'f'
      , 7: 'g'
      })
  })

  it('Should truncate to the shorter of the two lists', function () {
    zipObj([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
      .should.deep.equal({
        1: 'a'
      , 2: 'b'
      , 3: 'c'
      })
  })

  it('Should return an empty object if either list is empty', function () {
    zipObj([], [1, 2, 3])
      .should.deep.equal({})

    zipObj([1, 2, 3], [])
      .should.deep.equal({})
  })
})
