'use strict';

var array = [1, 2, 3, 4, 5, 6];

function filter(array, predicateFunction){
    var result = []

    for (var i = 0; i < array.length; i++) {
        var each = array[i];
        if (predicateFunction(each)) {
            result.push(each);
        }
    }

    return result;
}


var evenNumbers = filter(array, function (each) {
    return each % 2 === 0;
});

var oddNumbers = filter(array, function (each) {
    return each % 2 === 1;
});

console.log('Even numbers: ' + evenNumbers);
console.log('Odd numbers: ' + oddNumbers);
