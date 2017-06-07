'use strict';

const returnThreeArgsCombined = function(a, b, c) {
    const parameters = Array.prototype.slice.call(arguments, 0);
    let sayIt = '';
    parameters.map((whatToSay) => {
        sayIt += whatToSay + ' ';
    })

    return sayIt.trim();
}

const returnFiveArgsCombined = function(a, b, c, d, e) {
    const parameters = Array.prototype.slice.call(arguments, 0);
    let sayIt = '';
    parameters.map((whatToSay) => {
        sayIt += whatToSay + ' ';
    })

    return sayIt.trim();
}

module.exports = {
  returnThreeArgsCombined: returnThreeArgsCombined,
  returnFiveArgsCombined: returnFiveArgsCombined
}