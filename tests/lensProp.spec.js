var lensProp = Redash.lensProp
  , over     = Redash.over
  , set      = Redash.set
  , view     = Redash.view

describe('(Function) lensProp', function () {
  it('Should properly report its arity', function () {
    lensProp.should.have.length(1)
  })

  it('Should return a new lens', function () {
    var lens = lensProp('id')

    lens.should.have.property('get').which.is.a('function')
    lens.should.have.property('set').which.is.a('function')
  })

  it('Should correctly get the target property using `view`', function () {
    view(lensProp('id'), { id: 5 })
      .should.equal(5)
  })

  it('Should correctly `set` the target property', function () {
    set(lensProp('id'), 5, { id: 1 })
      .should.deep.equal({
        id: 5
      })
  })

  it('Should correctly set the target property when used with `over`', function () {
    var double = function  (x) { return x * 2 }

    over(lensProp('id'), double, { id: 5 })
      .should.deep.equal({
        id: 10
      })
  })

  it('Should not mutate the object when setting the property', function () {
    var obj    = { id: 5 }
      , double = function  (x) { return x * 2 }

    set(lensProp('id'), 1, obj)
    over(lensProp('id'), double, obj)

    obj.should.deep.equal({
      id: 5
    })
  })
})
