'use strict';

const express = require('express');
const router = express.Router({
    mergeParams: true
});
const RouteError = require('../helpers/routeError')
const noResponseCache = require('../middleware/noResponseCache');
const waitAndReturnAPromise = require('./lib/waitAndReturnAPromise');

router.get('/status', (req, res, next) => {
    res.status(200).send('Get OK');
});

router.get('/promise/:waitTime?', noResponseCache, (req, res, next) => {
    const waitTime = req.params.waitTime || 10000;
    waitAndReturnAPromise(waitTime)
        .then(() => res.status(200).send('Promise returned'))
});

module.exports = router;