var flattenDeep = Redash.flattenDeep

describe('(Function) flattenDeep', function () {
  it('Should be a function.', function () {
    expect(flattenDeep).to.be.a('function')
  })

  it('Should deeply flatten an array.', function () {
    expect(flattenDeep([1,2,[3],[4,5,[6,[7,8,9]]]]))
      .to.deep.equal([1,2,3,4,5, 6, 7, 8, 9])
  })
})
