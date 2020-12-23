"use strict";
//functions
//funcion tipada
function sum(a, b) {
    return a + b;
}
sum(1, 2);
//
function mathOperation(callback, a, b) {
    return callback(a, b);
}
var result = mathOperation(function (a, b) { return a + b; }, 5, 5);
console.log(result);
