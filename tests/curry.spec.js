var curry = Redash.curry

describe('(Function) curry', function () {
  var _add3 = function (a, b, c) { return a + b + c }

  it('Should properly report its arity (is unary)', function () {
    curry.should.have.length(1)
  })

  it('Should return a function', function () {
    curry(_add3).should.be.a('function')
  })

  it('Should curry based off of function length', function () {
    var curr0 = curry(function () { return [].slice.call(arguments) })
      , curr1 = curry(function (a) { return [].slice.call(arguments) })
      , curr2 = curry(function (a, b) { return [].slice.call(arguments) })
      , curr3 = curry(function (a, b, c) { return [].slice.call(arguments) })

    curr0.should.be.a('function')
    curr0().should.deep.equal([])

    curr1.should.be.a('function')
    curr1().should.be.a('function')
    curr1(1).should.deep.equal([1])

    curr2.should.be.a('function')
    curr2().should.be.a('function')
    curr2(1).should.be.a('function')
    curr2(1, 2).should.deep.equal([1, 2])
    curr2(1)(2).should.deep.equal([1, 2])

    curr3.should.be.a('function')
    curr3().should.be.a('function')
    curr3(1).should.be.a('function')
    curr3(1, 2).should.be.a('function')
    curr3(1, 2, 3).should.deep.equal([1, 2, 3])
    curr3(1)(2)(3).should.deep.equal([1, 2, 3])
  })

  it('Should not bind additional arguments', function () {
    var curried = curry(_add3, 1, 2, 3)

    curried.should.be.a('function')
    curried(10, 100, 1000).should.equal(1110)
  })

  it('Should ignore invocations that don\'t supply arguments', function () {
    var curried = curry(_add3)

    curried()()()()()()().should.be.a('function')
  })

  it('Should only invoke the function once all arguments are supplied', function () {
    var curried = curry(_add3)

    curried()()(1)()(2)()(3).should.equal(6)
  })

  it('Should report the correct arity via function.length', function () {
    var curried0 = curry(function () {})
      , curried1 = curry(function (a0) {})
      , curried2 = curry(function (a0, a1) {})
      , curried3 = curry(function (a0, a1, a2) {})
      , curried4 = curry(function (a0, a1, a2, a3) {})
      , curried5 = curry(function (a0, a1, a2, a3, a4) {})
      , curried6 = curry(function (a0, a1, a2, a3, a4, a5) {})

    curried0.should.have.length(0)
    curried1.should.have.length(1)
    curried2.should.have.length(2)
    curried3.should.have.length(3)
    curried4.should.have.length(4)
    curried5.should.have.length(5)
    curried6.should.have.length(6)
  })

  it('Should throw if the target function has an arity > 6', function () {
    var test = function () {
      curry(function (a0, a1, a2, a3, a4, a5, a6, a7) {})
    }

    test.should.throw(/Arity must be less than or equal to 6/)
  })
})
