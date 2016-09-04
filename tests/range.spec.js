var range = Redash.range

describe('(Function) range', (t) => {
  test('return an array of numbers, incremented by 1', (t) => {
    range(0, 10)
      .should.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  test('return an empty array when end === start', (t) => {
    range(1, 1)
      .should.deep.equal([])
  })

  test('return an empty array when end < start', (t) => {
    range(10, 10).should.deep.equal([])
    range(10, -10).should.deep.equal([])
  })
})
