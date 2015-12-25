var curry = Redash.curry

describe('(Function) curry', function () {
  
  var _add3 = function (a, b, c) { return a + b + c }
  
  it('Should be a function.', function () {
    expect(curry).to.be.a('function')
  })
  
  it('Should return a function.', function () {
    expect(curry(_add3)).to.be.a('function')
  })
  
  it('Should curry based off of function length.', function () {
    var curr0 = curry(function () { return [].slice.call(arguments) })
    var curr1 = curry(function (a) { return [].slice.call(arguments) })
    var curr2 = curry(function (a, b) { return [].slice.call(arguments) })
    var curr3 = curry(function (a, b, c) { return [].slice.call(arguments) })
    
    expect(curr0).to.be.a('function')
    expect(curr0()).to.deep.equal([])
    
    expect(curr1).to.be.a('function')
    expect(curr1()).to.be.a('function')
    expect(curr1(1)).to.deep.equal([1])
    
    expect(curr2).to.be.a('function')
    expect(curr2()).to.be.a('function')
    expect(curr2(1)).to.be.a('function')
    expect(curr2(1, 2)).to.deep.equal([1, 2])
    expect(curr2(1)(2)).to.deep.equal([1, 2])
    
    expect(curr3).to.be.a('function')
    expect(curr3()).to.be.a('function')
    expect(curr3(1)).to.be.a('function')
    expect(curr3(1, 2)).to.be.a('function')
    expect(curr3(1, 2, 3)).to.deep.equal([1, 2, 3])
    expect(curr3(1)(2)(3)).to.deep.equal([1, 2, 3])
  })
  
  it('Should not bind additional arguments.', function () {
    var curried = curry(_add3, 1, 2, 3)
    
    expect(curried).to.be.a('function')
    expect(curried(10, 100, 1000)).to.equal(1110)
  })
  
  it('Should ignore invocations that don\'t supply arguments.', function () {
    var curried = curry(_add3)
    
    expect(curried()()()()()()()).to.be.a('function')
  })
  
  it('Should only invoke the function once all arguments are supplied.', function () {
    var curried = curry(_add3)
    
    expect(curried()()(1)()(2)()(3)).to.equal(6)
  })
})
