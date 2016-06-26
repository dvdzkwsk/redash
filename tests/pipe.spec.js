var pipe = Redash.pipe

describe('(Function) pipe', function () {
  it('Should return a function', function () {
    pipe(function () {}, function () {}).should.be.a('function')
  })

  it('Should correctly report its arity to match the leftmost function', function () {
    var unary   = function (a0) {}
      , binary  = function (a0, a1) {}
      , ternary = function (a0, a1, a2) {}

    pipe(unary, binary, ternary).should.have.length(1)
    pipe(ternary, binary, unary).should.have.length(3)
  })

  it('Should be curried to the arity of the leftmost function', function () {
    var unary   = sinon.spy(function (a0) {})
      , binary  = sinon.spy(function (a0, a1) {})
      , ternary = sinon.spy(function (a0, a1, a2) {})

    pipe(ternary, binary, unary)()
    ternary.should.not.have.been.called()

    pipe(ternary, binary, unary)(1)
    ternary.should.not.have.been.called()

    pipe(ternary, binary, unary)(1)()
    pipe(ternary, binary, unary)(1)(2)
    ternary.should.not.have.been.called()

    pipe(ternary, binary, unary)(1)(2)()
    ternary.should.not.have.been.called()

    pipe(ternary, binary, unary)(1)(2)(3)
    ternary.should.have.been.calledOnce()
  })

  it('Should invoke the functions from left to right', function () {
    var s1 = sinon.spy()
      , s2 = sinon.spy()
      , s3 = sinon.spy()

    pipe(s1, s2, s3)(0)
    s1.should.have.been.calledBefore(s2)
    s2.should.have.been.calledBefore(s3)
    s3.should.have.been.calledOnce()
  })
})
