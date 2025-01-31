
class Student1{
    fullname: string;
    constructor(public fname:string, public middlename:string,public lname:string){
         this.fullname=fname+' '+middlename+' '+lname;
    }
}
interface Person{
    fname:string;
    lname:string;
}
function greeter1(person:Person){
    return "hello"+person.fname+" "+person.lname;
}
let user1=new Student1("soujanya", "M","maachanna");
document.body.textContent=greeter1(user1);