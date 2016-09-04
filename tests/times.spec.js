var times = Redash.times

describe('(Function) times', (t) => {
  test('properly report its arity (is binary)', (t) => {
    times.should.have.length(2)
  })

  test('be curried', (t) => {
    times(function () {}).should.be.a('function')
  })

  test('call the provided function N times', (t) => {
    var spy = sinon.spy()

    times(spy, 5)
    spy.callCount.should.equal(5)
  })

  test('provide the call index as the only argument', (t) => {
    var spy = sinon.spy()

    times(spy, 3)
    spy.firstCall.args.should.deep.equal([0])
    spy.secondCall.args.should.deep.equal([1])
    spy.thirdCall.args.should.deep.equal([2])
  })

  test('return a list of the results of all N invocations', (t) => {
    times(function (i) { return i % 2 === 0 }, 5)
      .should.deep.equal([true, false, true, false, true])
  })
})
