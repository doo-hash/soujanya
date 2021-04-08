interface Iperson{
    fname:string,
    lname:string,
    sayHai:()=>string
}

var cust:Iperson={
    fname:"souji",lname:"soumya",sayHai:():string=>{return "hai welcome";}
}
console.log("cust object: ");
console.log(cust.fname);
console.log(cust.lname);
console.log(cust.sayHai());
console.log();
console.log();

var emp:Iperson={
    fname:"varma",lname:"abhi",sayHai:():string=>{return "hai welcome";}
}
console.log("emp object: ");
console.log(emp.fname);
console.log(emp.lname);
console.log(emp.sayHai());