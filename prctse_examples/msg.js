"use strict";
exports.__esModule = true;
var message = "HELLO WORLD";
console.log(message.toLowerCase());
function greet(person, date) {
    console.log("hello " + person + ", today is " + date.toDateString() + "!");
}
greet("soujanya", new Date());
