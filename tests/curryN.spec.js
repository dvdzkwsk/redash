var curryN = Redash.curryN

describe('(Function) curryN', function () {
  var _add3 = function (a, b, c) { return a + b + c }

  it('Should properly report its arity (is binary)', function () {
    curryN.should.have.length(2)
  })

  it('Should return a function.', function () {
    var curried = curryN(3, _add3)

    expect(curried).to.be.a('function')
    expect(curried(1)).to.be.a('function')
    expect(curried(1, 2)).to.be.a('function')
    expect(curried(1, 2, 3)).to.equal(6)
    expect(curried(1, 2)(3)).to.equal(6)
    expect(curried()(1)(2)(3)).to.equal(6)
  })

  it('Should curry based off of the provided arity, regardless of function length.', function () {
    var curr0 = curryN(0, function (a, b, c) { return [].slice.call(arguments) })
      , curr3 = curryN(3, function () { return [].slice.call(arguments) })

    expect(curr0).to.be.a('function')
    expect(curr0()).to.deep.equal([])
    expect(curr0(1, 2, 3)).to.deep.equal([1, 2, 3])

    expect(curr3).to.be.a('function')
    expect(curr3()(1)()(2)()(3)).to.deep.equal([1, 2, 3])
    expect(curr3(1)()(2)(3)).to.deep.equal([1, 2, 3])
  })

  it('Should not bind additional arguments on its first invocation.', function () {
    var curried = curryN(3, _add3, 1, 2, 3)

    expect(curried).to.be.a('function')
    expect(curried(10, 100, 1000)).to.equal(1110)
  })

  it('Should ignore invocations that don\'t supply arguments.', function () {
    var curried = curryN(3, _add3)

    expect(curried()()()()()()()).to.be.a('function')
  })

  it('Should only invoke the function once all arguments are supplied.', function () {
    var curried = curryN(3, _add3)

    expect(curried()()(1)()(2)()(3)).to.equal(6)
  })
})
