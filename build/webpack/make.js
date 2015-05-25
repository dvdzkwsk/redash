const merge = require('../utils/merge-deep');

module.exports = config => merge(
  require('./configs/default'),
  require(`./configs/${config}`)
);
