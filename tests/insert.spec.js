var insert = Redash.insert

describe('(Function) insert', function () {
  it('Should properly report its arity (is ternary)', function () {
    insert.should.have.length(3)
  })

  it('Should be curried', function () {
    insert(1).should.be.a('function')
    insert(1, 'hello').should.be.a('function')
  })

  it('Should replace the element at the target index with the new value', function () {
    insert(4, 100, [1, 2, 3, 4, 5])
      .should.deep.equal([1, 2, 3, 4, 100])
  })

  it('Should not mutate the original array', function () {
    var arr = [1, 2, 3, 4, 5]
      , res = insert(2, 100, arr)

    arr.should.deep.equal([1, 2, 3, 4, 5])
    res.should.deep.equal([1, 2, 100, 4, 5])
  })
})
