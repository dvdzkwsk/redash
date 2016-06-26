var reject = Redash.reject

describe('(Function) reject', function () {
  it('Should be curried.', function () {
    expect(reject()).to.be.a('function')
  })

  it('Should include only items where the predicate does _not_ match.', function () {
    var isLessThan3 = function (x) { return x < 3 }

    expect(reject(isLessThan3, [1, 2, 3, 4, 5])).to.deep.equal([3, 4, 5])
    expect(reject(isLessThan3, [0, 1, 2])).to.deep.equal([])
  })
})
