'use strict';

const express = require('express');
const router = express.Router({
    mergeParams: true
});
const bodyParser = require('body-parser');
const priceTotaller = require('./lib/priceTotaller');
const categoryFilter = require('./lib/categoryFilter');
const compose = require('lodash/fp/compose');
const RouteError = require('../helpers/routeError')

router.get('/status', (req, res, next) => {
    res.status(200).send('Get OK');
});

router.post('/status', (req, res, next) => {
    res.status(200).send('Post OK');
});

router.post('/calculate/:category?', bodyParser.json(), (req, res, next) => {
    const category = req.params.category;
    let priceCalculator, priceTotal;
    try {
        if (category) {
            priceCalculator = compose(priceTotaller, categoryFilter);
            priceTotal = priceCalculator(req.body.items, category);
        } else {
            priceTotal = priceTotaller(req.body.items);
        }
    } catch (e) {
        return next(new RouteError(500, 'There was an error calculating the total'));
    }

    res.status(200).send('Total price = ' + priceTotal);
})

module.exports = router;