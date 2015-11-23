var reduceRight = Daedalus.reduceRight

describe('(Function) reduceRight', function () {
  it('Should be a function.', function () {
    expect(reduceRight).to.be.a('function')
  })
  
  it('Should have an alias "foldr".', function () {
    expect(reduceRight).to.equal(Daedalus.foldr)
  })
  
  it('Should be curried to an arity of 3.', function () {
    expect(reduceRight()).to.be.a('function')
    expect(reduceRight()()).to.be.a('function')
  })
  
  it('Should pass the accumulator result through the list from R -> L.', function () {
    var _calls = []
    
    var spy = function (acc, x) {
      _calls.push([acc, x])
      return acc + x
    }
    
    reduceRight(spy, 0, [1,2,3])
    expect(_calls[0]).to.deep.equal([0, 3])
    expect(_calls[1]).to.deep.equal([3, 2])
    expect(_calls[2]).to.deep.equal([5, 1])
  })
  
  it('Should provide arguments of (accumulator, item, index).', function () {
      var _calls = []
    
    var spy = function (acc, x, idx) {
      _calls.push([acc, x, idx])
      return acc + x
    }
    
    reduceRight(spy, 0, [1,2,3])
    expect(_calls[0]).to.deep.equal([0, 3, 2])
    expect(_calls[1]).to.deep.equal([3, 2, 1])
    expect(_calls[2]).to.deep.equal([5, 1, 0])
  })
  
  it('Should return the accumulated result.', function () {
    var res = reduceRight(function (acc, x) { return acc + x } , 0, [1,2,3])
    
    expect(res).to.equal(6)
  })
})