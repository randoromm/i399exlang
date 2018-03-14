'use strict';

var array = [
    { id: 1, selected: false },
    { id: 2, selected: true },
    { id: 3, selected: false },
    { id: 4, selected: true },
    { id: 5, selected: true },
    { id: 6, selected: false }
];

var selected = array
    .filter(function(i) {return i.selected;})
    .map(function(i) {return i.id;});

console.log('Ids of selected objects: ' + selected);

