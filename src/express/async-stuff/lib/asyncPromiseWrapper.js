'use strict';

const waitAndReturnAPromise = require('./waitAndReturnAPromise');
const asyncPromiseWrapper = async function(msToWait) {
  let v;
  try {
    v = await waitAndReturnAPromise(msToWait);
    console.log('v returned as : ', v);
  } catch (e) {
    console.log('asyncPromiseWrapper caught an error : ', e);
  }

  console.log('returning v');
  return v;
}

module.exports = asyncPromiseWrapper;
