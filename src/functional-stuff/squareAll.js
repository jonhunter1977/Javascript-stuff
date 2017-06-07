const map = require('lodash/fp/map');
const squareAll = map(num => num * num);

module.exports = squareAll;