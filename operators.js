// Arithmetic Operators
let a=7;
let b=5;
console.log("addition:", a+b);
console.log("subtraction:", a-b);
console.log("multiplication:", a*b);
console.log("division:", a/b);
console.log("modulus:", a%b);

// Arithmetic Operators 2
{
let a=10;
let b=12;
let c=15;
console.log("addition:", a+b);
console.log(a+c);
console.log("subtraction:", b-a);
console.log(c-b-a);
console.log("multiplication:", a*b);
console.log(c*b);
console.log("division:", b/a);
console.log(c/a);
console.log("modulus:", b%a);
console.log(c%a);
}

// Comparison Operators
{
    let a=20;
    let  b="4";
    console.log("==:", a==b);
    console.log("!=", a!= b);
    console.log("===", a===b);
    console.log("!==", a!==b);
}

//Comparison Operators 2
{
    let a=5;
    let b=2;
    console.log(">", a>b);
    console.log("<", a<b);
    console.log(">=", a>=b);
    console.log("<=", a<=b);
}

// Logical Operators
{
    let hasLicense=true;
    let hasCar=false;
    console.log("AND:", hasLicense && hasCar);
    console.log("OR:", hasLicense || hasCar);
    console.log("NOT:", !hasLicense);
}
//bitwise operators
{
    let a=3;
    let b=8;
    console.log("And:", a & b);
    console.log("Or:", a | b);
    console.log("Xor:", a ^ b);
    console.log("Not:", ~a);
    console.log("Left Shift:", a << 1);
    console.log("Right Shift:", a >> 1);
}

// Assignment Operators
{
    let x=7;
    x+=5;
    console.log("x+=5:",x);
    x-=4;
    console.log("x-=4:",x);
    x*=3;
    console.log("x*=3:",x);
    x/=2;
    console.log("x/=2:",x);
    x%=4;
    console.log("x%=4:",x);
}

// Ternary Operator
{
    let marks=52;
    let result=(marks>=35)? "pass":"fail";
    console.log("result:", result);
}

//ternary operator 2
{
let age=12;
let result=(age>=18)? "eligible to vote":"not eligible to vote";
console.log("result:", result);
}