var scan = Redash.scan

describe('(Function) scan', (t) => {
  test('property report its arity (is ternary)', (t) => {
    scan.should.have.length(3)
  })

  test('be curried', (t) => {
    scan(function () {}).should.be.a('function')
    scan(function () {}, 1).should.be.a('function')
  })

  test('call the accumulator function through the list from L -> R', (t) => {
    var spy = sinon.spy(function (acc, a) { return acc + a })

    scan(spy, 0, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([0, 1])
    spy.secondCall.args.should.deep.equal([1, 2])
    spy.thirdCall.args.should.deep.equal([3, 3])
  })

  test('return an array of all the accrued accumulator values', (t) => {
    var fn = function (acc, a) { return acc + a }

    scan(fn, 0, [1, 2, 3])
      .should.deep.equal([0, 1, 3, 6])
  })
})
