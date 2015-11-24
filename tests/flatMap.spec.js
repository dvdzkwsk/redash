var flatMap = Daedalus.flatMap

describe('(Function) flatMap', function () {
  it('Should be a function.', function () {
    expect(flatMap).to.be.a('function')  
  })
  
  it('Should be curried.', function () {
    expect(flatMap()).to.be.a('function')  
  })
  
  it('Should transform each item in the collection.', function () {
    var double = function (x) { return x * 2 }
    
    expect(flatMap(double, [1,2,3,4])).to.deep.equal([2,4,6,8])  
  })
  
  it('Should shallowly flatten each result.', function () {
    var doubleAndTriple = function (x) { return [x * 2, x * 3] }
    
    expect(flatMap(doubleAndTriple, [1,2,3,4])).to.deep.equal([2,3,4,6,6,9,8,12])  
  })
  
  it('Should not deeply flatten each result.', function () {
    var doubleAndTriple = function (x) { return [x * 2, [x * 3]] }
    
    expect(flatMap(doubleAndTriple, [1,2,3,4])).to.deep.equal([2,[3],4,[6],6,[9],8,[12]]) 
  })
})