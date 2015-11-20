var take = Daedalus.take

describe('(Function) take', function () {
  it('Should be a function.', function () {
    expect(take).to.be.a('function')
  })
  
  it('Should be curried.', function () {
    expect(take()).to.be.a('function')  
  })
  
  it('Should return the n number of items from an array.', function () {
    expect(take(2, [1,2,3,4])).to.deep.equal([1,2])
  })
  
  it('Should only take as many items as actually exist.', function () {
    expect(take(15, [1,2,3,4])).to.deep.equal([1,2,3,4])
  })
})