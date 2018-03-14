'use strict';

factorial(5, function(result){console.log(result)});

function factorial(n, callback) {
    if (n < 0) {
        throw 'illegal argument'
    }

    var result = 1;
    while (n > 0) {
        result *= n;
        n--;
    }

    callback(result);
}
