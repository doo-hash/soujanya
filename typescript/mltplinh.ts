interface Iface{
    print();
    print();
}
class Clas1{
    A1():void{
        console.log("A1 method Implemented");
    }
}
class Clas2 extends Clas1 implements Iface{
    M1():void{
        console.log("M1 method implemented");
    }
    print():void{
        console.log(" Print1 method implemented");
    }
    print2():void{
        console.log("Print2 method implemented");
    }
}
var obj=new Clas2();
obj.A1();
obj.M1();
obj.print();
obj.print2();