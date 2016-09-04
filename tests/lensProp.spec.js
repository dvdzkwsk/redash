var lensProp = Redash.lensProp
  , over     = Redash.over
  , set      = Redash.set
  , view     = Redash.view

describe('(Function) lensProp', (t) => {
  test('properly report its arity', (t) => {
    lensProp.should.have.length(1)
  })

  test('return a new lens', (t) => {
    var lens = lensProp('id')

    lens.should.have.property('get').which.is.a('function')
    lens.should.have.property('set').which.is.a('function')
  })

  test('correctly get the target property using `view`', (t) => {
    view(lensProp('id'), { id: 5 })
      .should.equal(5)
  })

  test('correctly `set` the target property', (t) => {
    set(lensProp('id'), 5, { id: 1 })
      .should.deep.equal({
        id: 5
      })
  })

  test('correctly set the target property when used with `over`', (t) => {
    var double = function  (x) { return x * 2 }

    over(lensProp('id'), double, { id: 5 })
      .should.deep.equal({
        id: 10
      })
  })

  test('not mutate the object when setting the property', (t) => {
    var obj    = { id: 5 }
      , double = function  (x) { return x * 2 }

    set(lensProp('id'), 1, obj)
    over(lensProp('id'), double, obj)

    obj.should.deep.equal({
      id: 5
    })
  })
})
