'use strict';

const curryAnything = function(fn) {

    const arity = fn.length //the no of arguments required for the function passed in

    return (function resolver() {
        console.log('===');
        const memory = Array.prototype.slice.call(arguments);
        console.log('memory', memory);

        return function() {
            console.log(arguments);
            const local = memory.slice();
            console.log(local);
            Array.prototype.push.apply(local, arguments);
            console.log(local);
            let next = local.length >= arity ? fn : resolver;
            return next.apply(null, local);
        };

    }());
};

module.exports = curryAnything;