import { Console } from "console";

const message="HELLO WORLD";
console.log(message.toLowerCase());
function greet(person:string,date:Date){
    console.log(`hello ${person}, today is ${date.toDateString()}!`);
}
greet("soujanya", new Date());