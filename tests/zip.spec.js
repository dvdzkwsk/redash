var zip = Redash.zip

describe('(Function) zip', function () {
  it('Should properly report its arity (is binary)', function () {
    zip.should.have.length(2)
  })

  it('Should be curried', function () {
    zip([1, 2, 3]).should.be.a('function')
  })

  it('Should create a list of tuples (a[n], b[n])', function () {
    zip([1, 2, 3, 4, 5, 6, 7], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
      .should.deep.equal([
        [1, 'a']
      , [2, 'b']
      , [3, 'c']
      , [4, 'd']
      , [5, 'e']
      , [6, 'f']
      , [7, 'g']
      ])
  })

  it('Should truncate to the shorter of the two lists', function () {
    zip([1, 2, 3], ['a', 'b', 'c', 'd', 'e', 'f', 'g'])
      .should.deep.equal([
        [1, 'a']
      , [2, 'b']
      , [3, 'c']
      ])
  })

  it('Should return an empty array if either list is empty', function () {
    zip([], [1, 2, 3])
      .should.deep.equal([])

    zip([1, 2, 3], [])
      .should.deep.equal([])
  })
})
