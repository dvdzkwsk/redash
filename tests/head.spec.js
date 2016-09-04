var head = Redash.head

describe('(Function) head', (t) => {
  test('be a function.', (t) => {
    expect(head).to.be.a('function')
  })

  test('return the first item in an array.', (t) => {
    expect(head([1, 2, 3])).to.equal(1)
  })

  test('return undefined if the array is empty.', (t) => {
    expect(head([])).to.be.undefined
  })
})
