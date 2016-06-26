var reverse = Redash.reverse

describe('(Function) reverse', function () {
  it('Should reverse the provided list.', function () {
    expect(reverse([1, 2, 3, 4])).to.deep.equal([4, 3, 2, 1])
    expect(reverse([1])).to.deep.equal([1])
  })

  it('Should return an empty list if the provided list has 0 items.', function () {
    var res = reverse([])

    expect(res).to.be.an('array')
    expect(res).to.have.length(0)
  })

  it('Should return not mutate the original array.', function () {
    var arr = [1, 2, 3, 4, 5]
      , res = reverse(arr)

    expect(arr).to.deep.equal([1, 2, 3, 4, 5])
    expect(res).to.deep.equal([5, 4, 3, 2, 1])
  })
})
