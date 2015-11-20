var tail = Daedalus.tail;

describe('(Function) tail', function () {
  it('Should be a function.', function () {
    expect(tail).to.be.a('function');
  });
  
  it('Should return all but the first item in a list.', function () {
    expect(tail([1,2,3,4])).to.deep.equal([2,3,4]);
  });
  
  it('Should return an empty list if the provided list has 1 item.', function () {
    const res = tail([1]);
    
    expect(res).to.be.an('array');
    expect(res).to.have.length(0);
  });  
  
    it('Should return an empty list if the provided list has 0 items.', function () {
    const res = tail([]);
    
    expect(res).to.be.an('array');
    expect(res).to.have.length(0);
  }); 
});