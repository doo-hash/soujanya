function sayhai(n) {
    return "hai " + n.fname + " " + n.lname;
}
var p = { fname: "souji", lname: "maachannagari" };
//console.log(sayhai(p));
document.body.textContent = sayhai(p);
