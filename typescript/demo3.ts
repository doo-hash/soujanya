interface iface{
    fname:string;
    lname:string;
}
function sayhai(n:iface){
    return "hai "+n.fname+" "+n.lname;
}
let p={fname:"souji", lname:"maachannagari"};
//console.log(sayhai(p));
document.body.textContent=sayhai(p);