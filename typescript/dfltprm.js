function printdata(eid, name, salary, desn) {
    if (salary === void 0) { salary = 15000; }
    if (desn === void 0) { desn = "executive"; }
    console.log("EID : " + eid + "  " + "name: " + name + "   " + salary + "  " + desn);
}
printdata(1, 'kiran');
printdata(2, 'nitish', 14000);
printdata(3, 'meghana', 16000, 'manager');
