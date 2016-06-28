var all = Redash.all

describe('(Function) all', function () {
  it('Should properly report its arity (is binary)', function () {
    all.should.have.length(2)
  })

  it('Should be curried', function () {
    all(function () {}).should.be.a('function')
  })

  it('Should return true if all items in the list pass the predicate', function () {
    all(function (x) { return x % 2 === 0 }, [2, 4, 6, 8, 10])
      .should.equal(true)
  })

  it('Should return false if a single item does not pass the predicate', function () {
    all(function (x) { return x % 2 === 0 }, [2, 3, 4, 6, 8, 10])
      .should.equal(false)
  })

  it('Should short circuit', function () {
    const pred = sinon.spy(function (x) { return x % 2 === 0 })
    all(pred, [2, 4, 6, 7, 8, 10, 12])

    pred.callCount.should.equal(4)
  })

  it('Should return true for an empty list', function () {
    all(function () { return false }, [])
      .should.equal(true)
  })
})
