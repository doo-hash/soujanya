class Student{
    rno:number;
    sname:string;
    constructor(rno1:number,sname1:string){
        this.rno=rno1;
        this.sname=sname1;
    }
    dispData():void{
        console.log(this.rno+' '+this.sname);
    }
}
var obj=new Student(101,'soumya');
obj.dispData();
