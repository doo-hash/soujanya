import { func } from "prop-types";

var arr:number[]=[10,20,30]
console.log(arr);
arr.push(40,50);
console.log(arr);
arr.pop();
console.log(arr);
arr.reverse();
console.log(arr);

arr.forEach(function(value)){
    console.log(value)
});
console.log(arr);