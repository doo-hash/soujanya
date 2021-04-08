var Student = /** @class */ (function () {
    function Student(rno1, sname1) {
        this.rno = rno1;
        this.sname = sname1;
    }
    Student.prototype.dispData = function () {
        console.log(this.rno + ' ' + this.sname);
    };
    return Student;
}());
var obj = new Student(101, 'soumya');
obj.dispData();
