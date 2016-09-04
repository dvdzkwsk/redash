var reduce = Redash.reduce

describe('(Function) reduce', (t) => {
  test('properly report its arity (is ternary)', (t) => {
    reduce.should.have.length(3)
  })

  test('be curried', (t) => {
    reduce(function () {}).should.be.a('function')
    reduce(function () {}, 0).should.be.a('function')
  })

  test('pass the accumulator result through the list from left to right', (t) => {
    var spy = sinon.spy(function (acc, a) { return acc + a })

    reduce(spy, 0, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([0, 1])
    spy.secondCall.args.should.deep.equal([1, 2])
    spy.thirdCall.args.should.deep.equal([3, 3])
  })

  test('return the accumulated result.', (t) => {
    var fn = function (acc, a) { return acc + a }

    reduce(fn, 0, [1, 2, 3])
      .should.equal(6)
  })
})
