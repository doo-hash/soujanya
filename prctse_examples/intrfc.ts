import { any, string } from "prop-types";

interface Iface{
    idno:number;
    fname:string;
    lname:string;
    mailid:string;
}

/*(function(n:Iface){
    return console.log("first person: "+n.idno+" "+n.fname+" "+n.lname+" "+n.mailid);
})(p);*/
(function(n:Iface){
    return console.log("first person: "+n.idno+" "+n.fname+" "+n.lname+" "+n.mailid);
})({idno:101,fname:"souji",lname:"maachannagari",mailid:"souji@gmail.com"});
function person(n:Iface){
    return "first person: "+n.idno+" "+n.fname+" "+n.lname+" "+n.mailid;
}
let p={idno:101,fname:"souji",lname:"maachannagari",mailid:"souji@gmail.com"};
document.body.textContent=person(p);
document.body.textContent=(function(n:Iface){
    return "first person: "+n.idno+" "+n.fname+" "+n.lname+" "+n.mailid;
})(p);