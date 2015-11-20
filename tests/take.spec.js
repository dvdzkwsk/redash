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
  
  it('Should produce a new object reference even if the result is identitical.', function () {
    var arr = [1,2,3,4,5]
    var res = take(100, arr)
     
    expect(res).to.deep.equal([1,2,3,4,5])
    expect(res).to.not.equal(arr)
  })
})