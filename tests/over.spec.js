var lens  = Redash.lens
  , over  = Redash.over
  , assoc = Redash.assoc
  , prop  = Redash.prop
  , xform = function (x) {
    return x.toUpperCase()
  }

describe('(Function) over', (t) => {
  test('be a curried ternary function', (t) => {
    over.should.have.length(3)

    var noop = function () {}
    over(lens(noop)).should.be.a('function')
    over(lens(noop), noop).should.be.a('function')
  })

  test('call the getter exactly once', (t) => {
    var getter = sinon.spy(prop('foo'))

    over(lens(getter, assoc('foo')), xform, { foo: 'bar' })
    getter.should.have.been.calledOnce
  })

  test('call the setter exactly once', (t) => {
    var setter = sinon.spy(assoc('foo'))

    over(lens(prop('foo'), setter), xform, { foo: 'bar' })
    setter.should.have.been.calledOnce
  })

  test('call the transformer exactly once', (t) => {
    var _xform = sinon.spy(xform)

    over(lens(prop('foo'), assoc('foo')), _xform, { foo: 'bar' })
    _xform.should.have.been.calledOnce
  })

  test('return the result of the transformation', (t) => {
    over(lens(prop('foo'), assoc('foo')), xform, { foo: 'bar' })
      .should.deep.equal({
        foo: 'BAR'
      })
  })
})
