var filter = Redash.filter

describe('(Function) filter', function () {
  it('Should be a function.', function () {
    expect(filter).to.be.a('function')  
  })
  
  it('Should be curried.', function () {
    expect(filter()).to.be.a('function')
  })
  
  it('Should include only items where the predicate does _not_ match.', function () {
    var isEven = function (x) { return x % 2 === 0 }
    
    expect(filter(isEven, [1,2,3,4,5])).to.deep.equal([2,4])
    expect(filter(isEven, [1,3,5,7])).to.deep.equal([])
    expect(filter(isEven, [])).to.deep.equal([])
  })
})
