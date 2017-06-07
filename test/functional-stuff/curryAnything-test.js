const curryAnything = require('../../src/functional-stuff/curryAnything.js');
const returnAllArgsInAString = require('../../src/functional-stuff/returnAllArgsInAString.js');
const expect = require('expect.js');

describe('curryAnything', () => {
    it('should work for a function that takes 3 arguments', () => {
        const sayAnyThreeThings = curryAnything(returnAllArgsInAString.returnThreeArgsCombined);
        expect(sayAnyThreeThings('Why', 'hello', 'there')).to.be('Why hello there');
    });

    it('should work for a function that takes 5 arguments', () => {
        const sayAnyFiveThings = curryAnything(returnAllArgsInAString.returnFiveArgsCombined);
        expect(sayAnyFiveThings('one', 'two', 'three', 'four', 'five')).to.be('one two three four five');
    });

    it('should allow arguments to be passed in one by one for a function that takes 3 arguments', () => {
        const sayThreeThings = curryAnything(returnAllArgsInAString.returnThreeArgsCombined);
        expect(sayThreeThings('Whats')('the')('time?')).to.be('Whats the time?');
    });

    it('should allow arguments to be passed in one by one for a function that takes 5 arguments', () => {
        const saySomething = curryAnything(returnAllArgsInAString.returnFiveArgsCombined);
        console.log('@@@');
        const sayFive = saySomething('Five');
        console.log('@@@');
        const sayFour = sayFive('Four');
        console.log('@@@');
        const sayThree = sayFour('Three');
        console.log('@@@');
        const sayTwo = sayThree('Two');
        console.log('@@@');
        expect(sayTwo('One')).to.be('Five Four Three Two One');
    });
});