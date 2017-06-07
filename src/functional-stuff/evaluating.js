'use strict';

let me = 'Jon';

const greetMeConst = () => console.log('1: Hello ' + me);

function greetMeFunc() {
    console.log('2: Hello ' + me);
}

const greetMeIIFE = (function greetMeFunc() {
    const personToGreet = me;
    console.log('3: Hello ' + personToGreet);
})();

const greetMeNotIIFE = (function greetMeFunc() {
    const personToGreet = me;
    console.log('4: Hello ' + personToGreet);
});

me = 'Briony';

console.log('===');
greetMeConst();
console.log('===');
greetMeFunc();
console.log('===');
greetMeNotIIFE();