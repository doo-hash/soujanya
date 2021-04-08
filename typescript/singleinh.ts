class Clas1{
    eid:number;
    ename:string;
    constructor(eid1:number,ename1:string){
        this.eid=eid1;
        this.ename=ename1;
    }

}
class Clas2 extends Clas1{
    display():void{
        console.log(this.eid+" "+this.ename);
    }
}
var obj= new Clas2(101,"nitu");
obj.display();