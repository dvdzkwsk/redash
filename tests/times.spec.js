var times = Redash.times

describe('(Function) times', function () {
  it('Should properly report its arity (is binary)', function () {
    times.should.have.length(2)
  })

  it('Should be curried', function () {
    times(function () {}).should.be.a('function')
  })

  it('Should call the provided function N times', function () {
    var spy = sinon.spy()

    times(spy, 5)
    spy.callCount.should.equal(5)
  })

  it('Should provide the call index as the only argument', function () {
    var spy = sinon.spy()

    times(spy, 3)
    spy.firstCall.args.should.deep.equal([0])
    spy.secondCall.args.should.deep.equal([1])
    spy.thirdCall.args.should.deep.equal([2])
  })

  it('Should return a list of the results of all N invocations', function () {
    times(function (i) { return i % 2 === 0 }, 5)
      .should.deep.equal([true, false, true, false, true])
  })
})
