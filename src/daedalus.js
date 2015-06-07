var assign = require('./utils/assign');

var DAEDALUS = assign(
  {
    VERSION : '0.0.0'
  },
  require('./collections'),
  require('./functions'),
  require('./objects')
);

module.exports = exports = DAEDALUS;
