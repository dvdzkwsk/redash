var objects = require('./'),
    EXPECTED_FUNCTIONS = [
      'prop'
    ];

describe('Objects', function () {
  it('Should be an object.', function () {
    expect(objects).to.be.an.object;
  });

  EXPECTED_FUNCTIONS.forEach(function (fnName) {
    it('should have a method .' + fnName + '()', function () {
      expect(objects[fnName]).to.be.a.function;
    });
  });
});
