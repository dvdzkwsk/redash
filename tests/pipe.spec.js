var pipe = Redash.pipe

describe('(Function) pipe', (t) => {
  test('return a function', (t) => {
    pipe(function () {}, function () {}).should.be.a('function')
  })

  test('correctly report its arity to match the leftmost function', (t) => {
    var unary   = function (a0) {}
      , binary  = function (a0, a1) {}
      , ternary = function (a0, a1, a2) {}

    pipe(unary, binary, ternary).should.have.length(1)
    pipe(ternary, binary, unary).should.have.length(3)
  })

  test('be curried to the arity of the leftmost function', (t) => {
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

  test('invoke the functions from left to right', (t) => {
    var s1 = sinon.spy()
      , s2 = sinon.spy()
      , s3 = sinon.spy()

    pipe(s1, s2, s3)(0)
    s1.should.have.been.calledBefore(s2)
    s2.should.have.been.calledBefore(s3)
    s3.should.have.been.calledOnce()
  })
})
