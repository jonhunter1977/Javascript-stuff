const returnAllArgsInAString = require('../../src/functional-stuff/returnAllArgsInAString.js');
const expect = require('expect.js');

describe('returnAllArgsInAString', () => {

    describe('returnThreeArgsCombined', () => {
        it('should return the expected statement', () => {
            expect(returnAllArgsInAString.returnThreeArgsCombined('Hello', 'Jon', '!')).to.be('Hello Jon !');
        });
    });

    describe('returnFiveArgsCombined', () => {
        it('should return the expected statement', () => {
            expect(returnAllArgsInAString.returnFiveArgsCombined('Hello', 'Jon', 'hows', 'things', '?')).to.be('Hello Jon hows things ?');
        });
    });

});