var drop = Redash.drop

describe('(Function) drop', function () {
  it('Should properly report its arity (is binary)', function () {
    drop.should.have.length(2)
  })

  it('Should be curried', function () {
    drop(5).should.be.a('function')
  })

  it('Should return a new list with the first N items removed', function () {
    drop(2, [1, 2, 3, 4])
      .should.deep.equal([3, 4])
  })

  it('Should return an empty list if N exceeds the list length', function () {
    drop(100, [1, 2, 3, 4])
      .should.deep.equal([])

    drop(1, [])
      .should.deep.equal([])
  })

  it('Should return a new list even if no items are removed', function () {
    var arr = [1, 2, 3, 4, 5]
      , res

    res = drop(0, arr)
    arr.should.deep.equal([1, 2, 3, 4, 5])
    arr.should.not.equal(res)  // compare references
    res.should.deep.equal(arr) // compare values
  })
})
