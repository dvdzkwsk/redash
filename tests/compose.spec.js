var compose = Daedalus.compose


describe('(Function) compose', function () {
  var _spies
  
  beforeEach(function () {
    _spies = {}
    _spies.add = function (a, b) { return a + b }
    _spies.add5 = function (x) { return x + 5 }
    _spies.double = function (x) { return x * 2 }
  })
  
  it('Should be a function.', function () {
    expect(compose).to.be.a('function')
  })
  
  it('Should return a function.', function () {
    expect(compose(_spies.add, _spies.double)).to.be.a('function')
  })
  
  it('Should invoke the functions from R -> L.', function () {
    expect(compose(_spies.double, _spies.add5)(0)).to.equal(10)
  })
  
  it('Should be curried to the arity of the right-most function.', function () {
    expect(compose(_spies.double, _spies.add5)()()).to.be.a('function')
    expect(compose(_spies.double, _spies.add5)()(0)).to.equal(10)
  
    expect(compose(_spies.double, _spies.add)()()).to.be.a('function')
    expect(compose(_spies.double, _spies.add)()(5, 5)).to.equal(20)
    expect(compose(_spies.double, _spies.add)()(1)(3)).to.equal(8)
  })
})