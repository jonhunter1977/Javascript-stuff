const categoryFilter = require('../../../src/express/checkout/lib/categoryFilter.js');
const expect = require('expect.js');
const order = require('../test-data/order');

describe.only('categoryFilteredItems', () => {
    it('should return the filtered items', () => {
        const expectedCategoryFilter = [{
                "sku": "a",
                "quantity": 5,
                "price": 100,
                "category": "drink"
            },
            {
                "sku": "b",
                "quantity": 2,
                "price": 80,
                "category": "drink"
            }];

        expect(categoryFilter(order.items, 'drink')).to.eql(expectedCategoryFilter);
    });
});