'use strict';

const waitAndReturnAPromise = (msToWait) => {
  return new Promise((resolve) => {
    const wait = msToWait || 5000;
    console.log('timer start - will wait for ', wait);
    setTimeout(() => {
      console.log('timer end');
      resolve(true);
    }, wait);
  });
};

module.exports = waitAndReturnAPromise;
