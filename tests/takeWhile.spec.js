var takeWhile = Redash.takeWhile

describe('(Function) takeWhile', (t) => {
  test('be a binary function that reports its arity', (t) => {
    takeWhile
      .should.have.length(2)
  })

  test('be curried', (t) => {
    takeWhile(function () {})
      .should.be.a('function')
  })

  test('return all items until the predicate returns false (exclusive)', (t) => {
    var isNot5 = function (x) { return x !== 5 }

    takeWhile(isNot5, [1, 2, 3, 4, 5, 6, 7, 8])
      .should.deep.equal([1, 2, 3, 4])
  })

  test('short circuit', (t) => {
    var isNot5 = sinon.spy(function (x) { return x !== 5 })

    takeWhile(isNot5, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    isNot5.callCount.should.equal(5)
  })

  test('return a new array even if it\'s identical to the input', (t) => {
    var arr = [1, 2, 3, 4]
      , res = takeWhile(function () { return true }, [1, 2, 3, 4])

    res.should.deep.equal([1, 2, 3, 4])
    res.should.not.equal(arr)
  })

  // asserts that the slice does not slice back onto a negative index
  test('return an empty list if the first item fails the predicate', (t) => {
    takeWhile(function () { return false }, [1, 2, 3, 4])
      .should.deep.equal([])
  })
})
