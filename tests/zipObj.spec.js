var zipObj = Redash.zipObj

describe('(Function) zipObj', (t) => {
  test('properly report its arity (is binary)', (t) => {
    zipObj.should.have.length(2)
  })

  test('be curried', (t) => {
    zipObj([1, 2, 3]).should.be.a('function')
  })

  test('create an object of key/value pairs', (t) => {
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

  test('truncate to the shorter of the two lists', (t) => {
    zipObj([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
      .should.deep.equal({
        1: 'a'
      , 2: 'b'
      , 3: 'c'
      })
  })

  test('return an empty object if either list is empty', (t) => {
    zipObj([], [1, 2, 3])
      .should.deep.equal({})

    zipObj([1, 2, 3], [])
      .should.deep.equal({})
  })
})
