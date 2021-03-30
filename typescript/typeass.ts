let v:any="this is a string";
let strlen=(<string>v).length;
console.log(strlen);
let v1:any="this is another string";
let strlen1:number=(v1 as string).length;
console.log(strlen1);