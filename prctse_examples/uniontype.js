"use strict";
exports.__esModule = true;
function emailid(id) {
    console.log("Your EmailId is: " + id + "@gmail.com");
}
emailid("souji12" + 12 + 154);
function welcometraveller(x) {
    if (Array.isArray(x)) {
        console.log("welcome " + x.join(" and "));
    }
    else
        console.log("welcome lone traveller " + x);
}
welcometraveller("souji" + ["souji", "soumya", "uma", "rithika"]);
welcometraveller(["souji", "soumya", "uma", "rithika"].slice(0, 2));
welcometraveller(["souji", "soumya", "uma", "rithika"] + " sssss");
welcometraveller("souji".slice(0, 1));
