//function declaration
function greet(){
    console.log("Hello World");
}
greet();

//function with parameters
function add(a,b){
    console.log(a+b);
}
add(10,30);

//function with parameters
function multiply(a,b){
    return a*b;
}
let result= multiply(22,10);
console.log(result);

//function with expression
let remote=function(){
    console.log("AC ON");
}
remote();

//Arrow Function
const square=n => n*n;
console.log(square(4));

//Anonymous Function
const sub = function(a,b){
    return a-b;
};
console.log(sub(2,3));

//callback Function
function display(name) {
    console.log("Hello " + name);
}

function processUser(callback) {
    let result = "Sai";
    callback(result);
}
processUser(display);

//Anonymous Function
setTimeout(function () {
    console.log("Executed after 3 seconds");
}, 3000);

const multiply1=a=>a*a;
console.log(multiply1(8));
