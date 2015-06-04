var assign = require('./utils/assign');

var DAEDALUS = assign(
  {
    VERSION : '0.0.0'
  },
  require('./curry'),
  require('./collections'),
  require('./objects')
);

module.exports = exports = DAEDALUS;
