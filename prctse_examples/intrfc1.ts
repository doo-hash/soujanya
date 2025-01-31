interface Iplanet{
    //[i:number]:Iplntinfo;
    [i:string]:Iplntinfo;
}
interface Iplntinfo{
    name:string;
    position:number;
}
let planets = new Array<Iplanet>();
planets["earth"]={name:"earth", position:2};
console.log(planets);