interface Istudent{
    rno:number;
    sname:string;
}
interface Iemp{
    eid:number;
    ename:string;
}
let data:Istudent|Iemp={rno:1,sname:"soumya",eid:101,ename:"meghana"};
console.log(data);