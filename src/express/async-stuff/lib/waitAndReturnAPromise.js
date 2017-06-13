'use strict';

const waitAndReturnAPromise = (msToWait) => {
  return new Promise((resolve, reject) => {

    if (isNaN(parseInt(msToWait))) return reject('Invalid wait time');

    const wait = msToWait || 5000;
    console.log('timer start - will wait for ', wait);
    setTimeout(() => {
      console.log('timer end');
      resolve(true);
    }, wait);
  });
};

module.exports = waitAndReturnAPromise;
