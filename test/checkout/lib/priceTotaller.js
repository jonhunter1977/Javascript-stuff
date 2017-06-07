const priceTotaller = require('../../../src/express/checkout/lib/priceTotaller.js');
const expect = require('expect.js');
const order = require('../test-data/order');

describe.only('total', () => {
    it('should return the correct total', () => {
        expect(priceTotaller(order.items)).to.be(967);
    });
});