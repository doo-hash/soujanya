function padLeft(padding, input) {
    if (typeof padding === "number") {
        console.log(new Array(padding + 1).join(" ") + input);
    }
    console.log(padding + input);
}
padLeft(2, "left");
function printAll(strs) {
    if (strs && typeof strs === "object") {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
printAll(null);
printAll(["souji", "soumya"]);
