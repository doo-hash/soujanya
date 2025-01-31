const { element } = require("prop-types");

let show=function(){
    console.log('hai! Iam soujanya.');
}
show();

setTimeout(function(){
    console.log('execute after one second');
},1000);

(function(){
    console.log('i will be there without being called');
})();

let person={
    fname:'machannagari',
    lname:'soujanya'
};
(function(){
    //console.log(person.fname+" "+person.lname);
    console.log(`${person.fname} ${person.lname}`);
})();

let gudshow=()=> console.log('using with arrow function');
gudshow();

var nums=[1,2,3,4];
var dbls=nums.map(function(element){return element*3;});
console.log(dbls);