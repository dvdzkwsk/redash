var map = Redash.map

describe('(Function) map', function () {
  var _spies
  
  beforeEach(function () {
    _spies = {
      noop : sinon.spy()
    }  
  })
  
  it('Should be a function.', function () {
    expect(map).to.be.a('function')
  })
  
  it('Should be curried.', function () {
    expect(map()).to.be.a('function')
  })
  
  it('Should call the transform function for each array item.', function () {
    map(_spies.noop, [1, 2, 3])
    
    _spies.noop.should.have.been.calledThrice
  })
  
  it('Should return the transformation for each item.', function () {
    var double = function (x) { return x * 2 }
    
    var res = map(double, [1,2,3])
    expect(res).to.deep.equal([2,4,6])
  })
  
  it('Should return a new array even if the transformation is an identity fn.', function () {
    var arr = [1,2,3]
    var res = map(function (x) { return x }, arr)
    
    expect(res).to.deep.equal([1,2,3])
    expect(res).to.not.equal(arr)
  })
})
