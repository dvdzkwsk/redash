var scan = Redash.scan

describe('(Function) scan', function () {
  it('Should property report its arity (is ternary)', function () {
    scan.should.have.length(3)
  })

  it('Should be curried', function () {
    scan(function () {}).should.be.a('function')
    scan(function () {}, 1).should.be.a('function')
  })

  it('Should call the accumulator function through the list from L -> R', function () {
    var spy = sinon.spy(function (acc, a) { return acc + a })

    scan(spy, 0, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([0, 1])
    spy.secondCall.args.should.deep.equal([1, 2])
    spy.thirdCall.args.should.deep.equal([3, 3])
  })

  it('Should return an array of all the accrued accumulator values', function () {
    var fn = function (acc, a) { return acc + a }

    scan(fn, 0, [1, 2, 3])
      .should.deep.equal([0, 1, 3, 6])
  })
})
