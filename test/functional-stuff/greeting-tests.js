const greeting = require('../../src/functional-stuff/greeting.js');
const expect = require('expect.js');

describe('lodashCurriedGreeting', () => {
    it('should return the correct greeting if all arguments are passed immediately', () => {
        expect(greeting.lodashCurriedGreeting('Hello', 'Jon', '!')).to.be('Hello Jon !');
    });

    it('should allow arguments to be passed one by one and the returning function called with the next argument', () => {
        const sayBye = greeting.lodashCurriedGreeting('Bye');
        const sayByeBriony = sayBye('Briony');
        expect(sayByeBriony(':-(')).to.be('Bye Briony :-(');
    });

    it('should allow arguments to be passed by calling the function for each argument', () => {
        const greetingMessage = greeting.lodashCurriedGreeting();
        expect(greetingMessage('Bye')('Briony')(':-(')).to.be('Bye Briony :-(');
    });
});