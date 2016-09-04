var map = Redash.map

describe('(Function) map', (t) => {
  test('properly report its arity (is binary)', (t) => {
    map.should.have.length(2)
  })

  test('be curried', (t) => {
    expect(map(function () {})).to.be.a('function')
  })

  test('call the transform function for each array item', (t) => {
    var spy = sinon.spy()

    map(spy, [1, 2, 3])
    spy.should.have.been.calledThrice()
  })

  test('provide a single argument, the current item, to the transformer', (t) => {
    var spy = sinon.spy()

    map(spy, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([1])
    spy.secondCall.args.should.deep.equal([2])
    spy.thirdCall.args.should.deep.equal([3])
  })

  test('return the transformation result for each item', (t) => {
    var double = function (x) { return x * 2 }

    map(double, [1, 2, 3])
      .should.deep.equal([2, 4, 6])
  })

  test('return a new array even if the final array is unchanged', (t) => {
    var arr = [1, 2, 3]
      , res = map(function (x) { return x }, arr)

    expect(res).to.not.equal(arr)         // compare references
    expect(res).to.deep.equal([1, 2, 3])  // compare values
  })
})
