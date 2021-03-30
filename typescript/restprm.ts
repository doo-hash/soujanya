function addnos(...numb:number[]){
    var i:number;
    var sum:number=0;
    for(i=0;i<numb.length;i++){
        sum+= numb[i];
    }
    console.log('sum of numbers : '+sum);
}
addnos(1,2,3,4,5,6,7,8,9);