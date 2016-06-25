var cond = Redash.cond

describe.only('(Function) cond', function () {
  it('Should properly report its arity (is binary)', function () {
    cond.should.have.length(2)
  })

  it('Should be curried', function () {
    cond([]).should.be.a('function')
  })

  it('Should be able to be applied in a single invocation', function () {
    expect(cond([], null)).to.equal(undefined)
  })

  it('Should treat each condition predicate and executor as unary', function () {
    var pred = sinon.spy()
      , val  = sinon.spy()

    cond([ [pred, val] ])('a', 'b', 'c')
    console.log(pred.firstCall.args)
    pred.should.have.been.calledWithExactly('a')
    val.should.have.been.calledWithExactly('a')
  })

  it('Should call the matched function when its predicate is true', function () {
    cond
  })

  it('Should handle truthy values', function () {

  })

  it('Should short circuit when a true condition is reached', function () {

  })

  it('Should call the condition predicate with the correct `this` binding', function () {

  })

  it('Should call the matched condition executor with the correct `this` binding', function () {

  })

  it('Should return `undefined` when conditions is empty', function () {
    expect(cond([], null)).to.equal(undefined)
  })

  it('Should return `undefined` when no condition is matched', function () {
    expect(cond([
      [function () { return false }, function () { return 'value' }],
      [function () { return false }, function () { return 'value' }],
    ], null)).to.equal(undefined)
  })
})