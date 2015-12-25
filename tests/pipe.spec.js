var pipe = Redash.pipe

describe('(Function) pipe', function () {
  var _spies
  
  beforeEach(function () {
    _spies = {}
    _spies.add = function (a, b) { return a + b }
    _spies.add5 = function (x) { return x + 5 }
    _spies.double = function (x) { return x * 2 }
  })
  
  it('Should be a function.', function () {
    expect(pipe).to.be.a('function')
  })
  
  it('Should return a function.', function () {
    expect(pipe(_spies.add, _spies.double)).to.be.a('function')
  })
  
  it('Should invoke the functions from L -> R.', function () {
    expect(pipe(_spies.add5, _spies.double)(0)).to.equal(10)
  })
  
  it('Should be curried to the arity of the left-most function.', function () {
    expect(pipe(_spies.add5, _spies.double)()()).to.be.a('function')
    expect(pipe(_spies.add5, _spies.double)()(0)).to.equal(10)
  
    expect(pipe(_spies.add, _spies.double)()()).to.be.a('function')
    expect(pipe(_spies.add, _spies.double)()(5, 5)).to.equal(20)
    expect(pipe(_spies.add, _spies.double)()(1)(3)).to.equal(8)
  })
})
