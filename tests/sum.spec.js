var sum = Redash.sum

describe('(Function) sum', function () {
  it('Should return the sum of all numbers in a list', function () {
    sum([1, 2, 3, 4, 5, 6])
      .should.equal(21)
  })

  it('Should return 0 if the list is empty', function () {
    sum([])
      .should.equal(0)
  })
})
