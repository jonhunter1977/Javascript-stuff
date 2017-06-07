const squareAll = require('../../src/functional-stuff/squareAll.js');
const expect = require('expect.js');

describe('squareAll', () => {
    it('should square all the values passed', () => {
        expect(squareAll([1, 2, 3, 4])).to.eql([1, 4, 9, 16]);
    })
});