var takeWhile = Redash.takeWhile

describe('(Function) takeWhile', function () {
  it('Should be a binary function that reports its arity', function () {
    takeWhile
      .should.have.length(2)
  })

  it('Should be curried', function () {
    takeWhile(function () {})
      .should.be.a('function')
  })

  it('Should return all items until the predicate returns false (exclusive)', function () {
    var isNot5 = function (x) { return x !== 5 }

    takeWhile(isNot5, [1, 2, 3, 4, 5, 6, 7, 8])
      .should.deep.equal([1, 2, 3, 4])
  })

  it('Should short circuit', function () {
    var isNot5 = sinon.spy(function (x) { return x !== 5 })

    takeWhile(isNot5, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    isNot5.callCount.should.equal(5)
  })

  it('Should return a new array even if it\'s identical to the input', function () {
    var arr = [1, 2, 3, 4]
      , res = takeWhile(function () { return true }, [1, 2, 3, 4])

    res.should.deep.equal([1, 2, 3, 4])
    res.should.not.equal(arr)
  })

  // asserts that the slice does not slice back onto a negative index
  it('Should return an empty list if the first item fails the predicate', function () {
    takeWhile(function () { return false }, [1, 2, 3, 4])
      .should.deep.equal([])
  })
})
