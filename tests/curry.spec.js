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

  it('Should report the correct arity via function.length.', function () {
    var curried0 = curry(function () {})
    var curried1 = curry(function (a0) {})
    var curried2 = curry(function (a0, a1) {})
    var curried3 = curry(function (a0, a1, a2) {})
    var curried4 = curry(function (a0, a1, a2, a3) {})
    var curried5 = curry(function (a0, a1, a2, a3, a4) {})
    var curried6 = curry(function (a0, a1, a2, a3, a4, a5) {})

    expect(curried0).to.have.length(0)
    expect(curried1).to.have.length(1)
    expect(curried2).to.have.length(2)
    expect(curried3).to.have.length(3)
    expect(curried4).to.have.length(4)
    expect(curried5).to.have.length(5)
    expect(curried6).to.have.length(6)
  })

  it('Should throw if the target function has an arity > 6.', function () {
    var test = function () {
      curry(function (a0, a1, a2, a3, a4, a5, a6, a7) {})
    }

    expect(test).to.throw(/Arity must be less than or equal to 6/)
  })
})
