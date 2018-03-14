'use strict';

var array = [1, 2, 3, 4, 5, 6];

array.push(7, 8);
var evenSquared = array
    .filter(function(i) {return i % 2 === 0;})
    .map(function(i) {return i * i;});

console.log('Even numbers squared: ' + evenSquared);

