// Loops in JavaScript

//For Loop
for(let i=0; i<=10; i++){
    console.log(i); 
}

//For Loop 2
for(let i=8; i>=2; i--){
    console.log(i);
}

//While Loop
let j=1;
while(j<=5){
    console.log(j);
    j++;
}
 
//Do While Loop
let k=10;
do{
    console.log(k);
    k++;
} while(k<=20);

//for in
 let student={
    name:"Ram",
    roll:"20",
    branch:"CSE"
 };
 for(let key in student){
console.log(key+":"+student[key]);
 }

 //for of Loop
 let fruits=["apple","Mango","Banana"];
 for(let fruit of fruits){
    console.log(fruit);
 }

 //break statement
 for(let i=3; i<=12; i++){
    if(i==8){
        break;
    }
    console.log(i);
 }

 //continue statement
 for(let i=14; i<=20; i++){
    if(i==17){
        continue;
    }
    console.log(i);
 }