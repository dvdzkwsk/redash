var take = Redash.take

describe('(Function) take', (t) => {
  test('be a function.', (t) => {
    expect(take).to.be.a('function')
  })

  test('be curried.', (t) => {
    expect(take()).to.be.a('function')
  })

  test('return the n number of items from an array.', (t) => {
    expect(take(2, [1, 2, 3, 4])).to.deep.equal([1, 2])
  })

  test('only take as many items as actually exist.', (t) => {
    expect(take(15, [1, 2, 3, 4])).to.deep.equal([1, 2, 3, 4])
  })

  test('produce a new object reference even if the result is identitical.', (t) => {
    var arr = [1, 2, 3, 4, 5]
      , res = take(100, arr)

    expect(res).to.deep.equal([1, 2, 3, 4, 5])
    expect(res).to.not.equal(arr)
  })
})
