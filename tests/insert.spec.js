var insert = Redash.insert

describe('(Function) insert', (t) => {
  test('properly report its arity (is ternary)', (t) => {
    insert.should.have.length(3)
  })

  test('be curried', (t) => {
    insert(1).should.be.a('function')
    insert(1, 'hello').should.be.a('function')
  })

  test('replace the element at the target index with the new value', (t) => {
    insert(4, 100, [1, 2, 3, 4, 5])
      .should.deep.equal([1, 2, 3, 4, 100])
  })

  test('not mutate the original array', (t) => {
    var arr = [1, 2, 3, 4, 5]
      , res = insert(2, 100, arr)

    arr.should.deep.equal([1, 2, 3, 4, 5])
    res.should.deep.equal([1, 2, 100, 4, 5])
  })
})
