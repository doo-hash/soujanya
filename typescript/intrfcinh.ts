interface Iface1{
    eid:number;
    ename:string;
}
interface Iface2{
    desn:string;
    salary:number;
}
interface Iemp extends Iface1,Iface2{}
var obj:Iemp={eid:101,ename:"ravi",desn:"manager",salary:10000};
this.eid=obj.eid;
console.log(`EID: ${this.eid}, ENAME: ${obj.ename}, DESN: ${obj.desn}, SALARY: ${obj.salary}`);