interface Friend{
    fname: string;
}
function printFirstfriend(friends: Friend[]){
    for(let friend of friends){
        console.log(friend.fname);
        //return friend.fname;
    }
}
printFirstfriend([{fname:"souji"}, {fname:"soumya"},{fname:"uma"},{fname:"rithika"}]);