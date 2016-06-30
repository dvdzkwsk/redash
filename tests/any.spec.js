var any = Redash.any

describe('(Function) any', function () {
  it('Should properly report its arity (is binary)', function () {
    any.should.have.length(2)
  })

  it('Should be curried', function () {
    any(function () {}).should.be.a('function')
  })

  it('Should provide each element in the list as the only argument to the predicate', function () {
    var spy = sinon.spy(function () { return false })

    any(spy, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([1])
    spy.secondCall.args.should.deep.equal([2])
    spy.thirdCall.args.should.deep.equal([3])
  })

  it('Should return true if any item matches the predicate', function () {
    any(function (x) { return x === 3 }, [1, 2, 3])
      .should.equal(true)
  })

  it('Should short circuit when an item matches the predicate', function () {
    var spy = sinon.spy(function (x) { return x === 3 })

    any(spy, [1, 2, 3, 4, 5, 6, 7])
    spy.callCount.should.equal(3)
  })

  it('Should return false if no item matches the predicate', function () {
    any(function () { return false }, [1, 2, 3, 4, 5])
      .should.equal(false)
  })

  // TODO(zuko): should this really be false?
  it('Should return false if the list is empty', function () {
    any(function () { return true }, [])
      .should.equal(false)
  })
})
