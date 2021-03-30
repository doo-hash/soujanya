function addnos() {
    var numb = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numb[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < numb.length; i++) {
        sum += numb[i];
    }
    console.log('sum of numbers : ' + sum);
}
addnos(1, 2, 3, 4, 5, 6, 7, 8, 9);
