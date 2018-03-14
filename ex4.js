'use strict';

function Person(name){
    this.name = name;
}

Person.prototype.getName = function () {return this.name;};

var person = new Person("Malle");
console.log(person.getName());
console.log(Object.keys(person.__proto__));