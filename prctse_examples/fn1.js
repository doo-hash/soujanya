"use strict";
exports.__esModule = true;
function greet1(fn) {
    fn("hello");
}
function greet(fn) {
    fn("hello");
}
function prntconsole(s) {
    console.log(s);
}
greet(prntconsole);
greet1(prntconsole);
function doSomething(fn) {
    console.log(fn.description + " returned " + fn(6));
}
doSomething;
