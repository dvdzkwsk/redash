var reduce = Redash.reduce

describe('(Function) reduce', function () {
  it('Should be a function.', function () {
    expect(reduce).to.be.a('function')
  })

  it('Should have an alias "foldl".', function () {
    expect(reduce).to.equal(Redash.foldl)
  })

  it('Should be curried (arity 3).', function () {
    expect(reduce()).to.be.a('function')
    expect(reduce()()).to.be.a('function')
  })

  it('Should pass the accumulator result through the list from L - R.', function () {
    var _calls = []

    var spy = function (acc, x) {
      _calls.push([acc, x])
      return acc + x
    }

    reduce(spy, 0, [1,2,3])
    expect(_calls[0]).to.deep.equal([0, 1])
    expect(_calls[1]).to.deep.equal([1, 2])
    expect(_calls[2]).to.deep.equal([3, 3])
  })

  it('Should provide arguments of (accumulator, item, index).', function () {
        var _calls = []

    var spy = function (acc, x) {
      _calls.push([acc, x])
      return acc + x
    }

    reduce(spy, 0, [1,2,3])
    expect(_calls[0]).to.deep.equal([0, 1])
    expect(_calls[1]).to.deep.equal([1, 2])
    expect(_calls[2]).to.deep.equal([3, 3])
  })

  it('Should return the accumulated result.', function () {
    var res = reduce(function (acc, x) { return acc + x } , 0, [1,2,3])

    expect(res).to.equal(6)
  })
})
