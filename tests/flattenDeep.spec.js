var flattenDeep = Redash.flattenDeep

describe('(Function) flattenDeep', (t) => {
  test('deeply flatten an array.', (t) => {
    flattenDeep([1, 2, [3], [4, 5, [6, [7, 8, 9]]]])
      .should.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
