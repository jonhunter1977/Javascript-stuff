'use strict';

const express = require('express');
const router = express.Router({
    mergeParams: true
});
const RouteError = require('../helpers/routeError')
const noResponseCache = require('../middleware/noResponseCache');
const waitAndReturnAPromise = require('./lib/waitAndReturnAPromise');
const asyncPromiseWrapper = require('./lib/asyncPromiseWrapper');

router.get('/status', (req, res, next) => {
    res.status(200).send('Get OK');
});

router.get('/promise/:waitTime?', noResponseCache, (req, res, next) => {
    const waitTime = req.params.waitTime || 10000;
    waitAndReturnAPromise(waitTime)
        .then(() => res.status(200).send('Promise returned'))
});

router.get('/async/:waitTime?', noResponseCache, (req, res, next) => {
    const waitTime = req.params.waitTime || 10000;
    asyncPromiseWrapper(waitTime);
    return res.status(200).send('Async promised wrapper returned');

});

module.exports = router;
