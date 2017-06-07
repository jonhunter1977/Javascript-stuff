const curry = require('lodash/fp/curry');
const greet = (greeting, name, closingGesture) => `${greeting} ${name} ${closingGesture}`;

const lodashCurriedGreeting = curry(greet);

module.exports = {
    lodashCurriedGreeting: lodashCurriedGreeting,
}