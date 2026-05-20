//JavaScript Scope

//Global scope
let x =22;
function a(){
    console.log(x);
} a();

//Local scope
function b(){
    let x=10;
    console.log(x);
}
 b();
 
//Block Scope
{
    let x=11;
    var y=20;
    const z=30;
    console.log(x,y,z);
}
console.log(x);