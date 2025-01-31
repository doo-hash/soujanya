"use strict";
function printFirstfriend(friends) {
    for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
        var friend = friends_1[_i];
        console.log(friend.fname);
        //return friend.fname;
    }
}
printFirstfriend([{ fname: "souji" }, { fname: "soumya" }, { fname: "uma" }, { fname: "rithika" }]);
