var reduce = Redash.reduce

describe('(Function) reduce', function () {
  it('Should properly report its arity (is ternary)', function () {
    reduce.should.have.length(3)
  })

  it('Should be curried', function () {
    reduce(function () {}).should.be.a('function')
    reduce(function () {}, 0).should.be.a('function')
  })

  it('Should pass the accumulator result through the list from left to right', function () {
    var spy = sinon.spy(function (acc, a) { return acc + a })

    reduce(spy, 0, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([0, 1])
    spy.secondCall.args.should.deep.equal([1, 2])
    spy.thirdCall.args.should.deep.equal([3, 3])
  })

  it('Should return the accumulated result.', function () {
    var fn = function (acc, a) { return acc + a }

    reduce(fn, 0, [1, 2, 3])
      .should.equal(6)
  })
})
