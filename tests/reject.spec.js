var reject = Redash.reject

describe('(Function) reject', (t) => {
  test('be curried.', (t) => {
    expect(reject()).to.be.a('function')
  })

  test('include only items where the predicate does _not_ match.', (t) => {
    var isLessThan3 = function (x) { return x < 3 }

    expect(reject(isLessThan3, [1, 2, 3, 4, 5])).to.deep.equal([3, 4, 5])
    expect(reject(isLessThan3, [0, 1, 2])).to.deep.equal([])
  })
})
