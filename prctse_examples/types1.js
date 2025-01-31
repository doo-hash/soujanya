/*let obj:any={x:2};
obj();
obj.bar=100;
obj.foo();
obj="hello";
const n:number=obj;*/
//const names=["souji","soumya","rithika","revanth"];
//names.forEach((s)=>{console.log(s.toUpperCase())});
function printCoord(pt) {
    if (pt.z == undefined) {
        //console.log(`x and y coordinates are (${pt.x},${pt.y})`);
        return "(" + pt.x + "," + pt.y + ")";
    }
    else
        //console.log(`x and y coordinates are (${pt.x},${pt.y},${pt.z})`);
        return "(" + pt.x + "," + pt.y + "," + pt.z + ")";
}
//printCoord({x:4,y:5});
//printCoord({x:4,y:5,z:6});
/*function middlept(){
    let crd=printCoord({x:2,y:5});
    console.log(typeof crd);
    console.log(crd);
}
middlept();*/
/*interface Coordints{
    x:number;
    y:number;
    z?:number;
}
let midlept:number;
let p:Coordints={x:1,y:2};
midlept=(p.x+p.y)/2;
console.log(`middle point is ${midlept}`);*/
function fullname(flnm) {
    var _a;
    console.log("full name is " + flnm.fname.toUpperCase() + ".");
    if (flnm.fname !== undefined) {
        console.log("" + ((_a = flnm.lname) === null || _a === void 0 ? void 0 : _a.toUpperCase()));
    }
    // console.log(`${flnm.lname?.toUpperCase()}`);
}
fullname({ fname: "soujanya", lname: "maachannagari" });
fullname({ fname: "soujanya" });
