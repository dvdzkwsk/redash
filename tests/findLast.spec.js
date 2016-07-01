var findLast = Redash.findLast

describe('(Function) findLast', function () {
  it('Should properly report its arity (is binary)', function () {
    findLast.should.have.length(2)
  })

  it('Should be curried', function () {
    findLast(function () {}).should.be.a('function')
  })

  it('Should return the last item in a list that matches the predicate', function () {
    var a = { id: 1 }
      , b = { id: 1 }
      , c = { id: 1 }

    findLast(function (x) { return x.id === 1 }, [a, b, c])
      .should.equal(c)
  })

  it('Should short circuit', function () {
    var spy = sinon.spy(function (x) { return x === 3 })

    findLast(spy, [1, 2, 3, 4, 5, 6, 7, 8, 3, 9, 10])
    spy.callCount.should.equal(3)
  })
})
