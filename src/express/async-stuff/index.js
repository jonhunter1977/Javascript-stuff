'use strict';

const express = require('express');
const router = express.Router({
  mergeParams: true
});
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

router.get('/async/:waitTime?', noResponseCache, async (req, res, next) => {
  const waitTime = req.params.waitTime || 10000;
  let result;
  try {
    result = await waitAndReturnAPromise(waitTime);
  } catch (e)  {
    result = e;
  }
  console.log(result);
  return result === true ?
    res.status(200).send('Async promised wrapper returned') :
    res.status(500).send(result);
});

module.exports = router;
