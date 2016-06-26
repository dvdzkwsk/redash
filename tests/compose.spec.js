var compose = Redash.compose

describe('(Function) compose', function () {
  it('Should return a function', function () {
    compose(function () {}, function () {}).should.be.a('function')
  })

  it('Should correctly report its arity to match the rightmost function', function () {
    var unary   = function (a0) {}
      , binary  = function (a0, a1) {}
      , ternary = function (a0, a1, a2) {}

    compose(unary, binary, ternary).should.have.length(3)
    compose(ternary, binary, unary).should.have.length(1)
  })

  it('Should be curried to the arity of the rightmost function', function () {
    var unary   = sinon.spy(function (a0) {})
      , binary  = sinon.spy(function (a0, a1) {})
      , ternary = sinon.spy(function (a0, a1, a2) {})

    compose(unary, binary, ternary)()
    ternary.should.not.have.been.called()

    compose(unary, binary, ternary)(1)
    ternary.should.not.have.been.called()

    compose(unary, binary, ternary)(1)()
    compose(unary, binary, ternary)(1)(2)
    ternary.should.not.have.been.called()

    compose(unary, binary, ternary)(1)(2)()
    ternary.should.not.have.been.called()

    compose(unary, binary, ternary)(1)(2)(3)
    ternary.should.have.been.calledOnce()
  })

  it('Should invoke the functions from right to left', function () {
    var s1 = sinon.spy()
      , s2 = sinon.spy()
      , s3 = sinon.spy()

    compose(s1, s2, s3)(0)
    s3.should.have.been.calledBefore(s2)
    s2.should.have.been.calledBefore(s1)
    s1.should.have.been.calledOnce()
  })
})
