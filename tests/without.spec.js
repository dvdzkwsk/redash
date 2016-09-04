var without = Redash.without

describe('(Function) without', (t) => {
  test('properly report its arity (is binary)', (t) => {
    without.should.have.length(2)
  })

  test('be curried', (t) => {
    without([1, 2, 3]).should.be.a('function')
  })

  test('exclude items in the first list from the second list', (t) => {
    without([1, 2, 3], [5,  4, 3, 2, 1])
      .should.deep.equal([5, 4])
  })

  test('return a new list even if no items are excluded', (t) => {
    var arr = [1, 2, 3, 4]
      , res = without([], arr)

    arr.should.deep.equal([1, 2, 3, 4])
    res.should.deep.equal([1, 2, 3, 4])
    res.should.not.equal(arr)
  })
})
