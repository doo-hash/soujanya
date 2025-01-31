"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*(function(n:Iface){
    return console.log("first person: "+n.idno+" "+n.fname+" "+n.lname+" "+n.mailid);
})(p);*/
(function (n) {
    return console.log("first person: " + n.idno + " " + n.fname + " " + n.lname + " " + n.mailid);
})({ idno: 101, fname: "souji", lname: "maachannagari", mailid: "souji@gmail.com" });
function person(n) {
    return "first person: " + n.idno + " " + n.fname + " " + n.lname + " " + n.mailid;
}
var p = { idno: 101, fname: "souji", lname: "maachannagari", mailid: "souji@gmail.com" };
document.body.textContent = person(p);
document.body.textContent = (function (n) {
    return "first person: " + n.idno + " " + n.fname + " " + n.lname + " " + n.mailid;
})(p);
