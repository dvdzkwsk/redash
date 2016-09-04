var lens  = Redash.lens
  , view  = Redash.view
  , assoc = Redash.assoc
  , prop  = Redash.prop

describe('(Function) view', (t) => {
  test('be a curried binary function', (t) => {
    view.should.have.length(2)

    var noop = function () {}
    view(lens(noop)).should.be.a('function')
  })

  test('properly apply the lens getter to the target', (t) => {
    var fooLens = lens(prop('foo'), assoc('foo'))

    view(fooLens, { foo: 'bar' })
      .should.equal('bar')
  })
})
