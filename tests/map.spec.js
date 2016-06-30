var map = Redash.map

describe('(Function) map', function () {
  it('Should properly report its arity (is binary)', function () {
    map.should.have.length(2)
  })

  it('Should be curried', function () {
    expect(map(function () {})).to.be.a('function')
  })

  it('Should call the transform function for each array item', function () {
    var spy = sinon.spy()

    map(spy, [1, 2, 3])
    spy.should.have.been.calledThrice()
  })

  it('Should provide a single argument, the current item, to the transformer', function () {
    var spy = sinon.spy()

    map(spy, [1, 2, 3])
    spy.firstCall.args.should.deep.equal([1])
    spy.secondCall.args.should.deep.equal([2])
    spy.thirdCall.args.should.deep.equal([3])
  })

  it('Should return the transformation result for each item', function () {
    var double = function (x) { return x * 2 }

    map(double, [1, 2, 3])
      .should.deep.equal([2, 4, 6])
  })

  it('Should return a new array even if the final array is unchanged', function () {
    var arr = [1, 2, 3]
      , res = map(function (x) { return x }, arr)

    expect(res).to.not.equal(arr)         // compare references
    expect(res).to.deep.equal([1, 2, 3])  // compare values
  })
})
