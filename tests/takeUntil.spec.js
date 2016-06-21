var takeUntil = Redash.takeUntil

describe('(Function) takeUntil', function () {
  it('Should be a binary function that reports its arity', function () {
    takeUntil
      .should.have.length(2)
  })

  it('Should be curried', function () {
    takeUntil(function () {})
      .should.be.a('function')
  })

  it('Should return all items until the predicate matches (exclusive)', function () {
    var is5 = function (x) { return x === 5 }

    takeUntil(is5, [1,2,3,4,5,6,7,8])
      .should.deep.equal([1,2,3,4])
  })

  it('Should short circuit', function () {
    var is5 = sinon.spy(function (x) { return x === 5 })

    takeUntil(is5, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    is5.callCount.should.equal(5)
  })

  it('Should return a new array even if it\'s identical to the input', function () {
    var arr = [1,2,3,4]
    var res = takeUntil(function () { return false }, [1,2,3,4])

    res.should.deep.equal([1,2,3,4])
    res.should.not.equal(arr)
  })
})
