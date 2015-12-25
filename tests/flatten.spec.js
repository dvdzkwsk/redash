var flatten = Redash.flatten

describe('(Function) flatten', function () {
  it('Should be a function.', function () {
    expect(flatten).to.be.a('function')  
  })
  
  it('Should deeply flatten an array.', function () {
    expect(flatten([1,2,[3],[4,5,[6,[7,8,9]]]])).to.deep.equal([1,2,3,4,5,6,7,8,9])
  })
})
