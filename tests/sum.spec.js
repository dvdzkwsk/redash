var sum = Redash.sum

describe('(Function) sum', (t) => {
  test('return the sum of all numbers in a list', (t) => {
    sum([1, 2, 3, 4, 5, 6])
      .should.equal(21)
  })

  test('return 0 if the list is empty', (t) => {
    sum([])
      .should.equal(0)
  })
})
