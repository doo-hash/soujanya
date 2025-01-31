import { func } from "prop-types";
type greetfn=(a:string)=>void;
function greet1(fn:greetfn){
    fn("hello");
}

function greet(fn:(a:string)=>void){
     fn("hello");
}
function prntconsole(s:string){
    console.log(s);
}
greet(prntconsole);
greet1(prntconsole);
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
