var Student1 = /** @class */ (function () {
    function Student1(fname, middlename, lname) {
        this.fname = fname;
        this.middlename = middlename;
        this.lname = lname;
        this.fullname = fname + ' ' + middlename + ' ' + lname;
    }
    return Student1;
}());
function greeter1(person) {
    return "hello" + person.fname + " " + person.lname;
}
var user1 = new Student1("soujanya", "M", "maachanna");
document.body.textContent = greeter1(user1);
