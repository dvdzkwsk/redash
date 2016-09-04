var reverse = Redash.reverse

describe('(Function) reverse', (t) => {
  test('reverse the provided list.', (t) => {
    expect(reverse([1, 2, 3, 4])).to.deep.equal([4, 3, 2, 1])
    expect(reverse([1])).to.deep.equal([1])
  })

  test('return an empty list if the provided list has 0 items.', (t) => {
    var res = reverse([])

    expect(res).to.be.an('array')
    expect(res).to.have.length(0)
  })

  test('return not mutate the original array.', (t) => {
    var arr = [1, 2, 3, 4, 5]
      , res = reverse(arr)

    expect(arr).to.deep.equal([1, 2, 3, 4, 5])
    expect(res).to.deep.equal([5, 4, 3, 2, 1])
  })
})
