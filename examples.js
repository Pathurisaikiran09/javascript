//altenate numbers from 1 to 15
for(let i=1; i<=15; i+=2){
    console.log(i);
}

//even numbers from 1 to 20
for(let i=1;i<=20;i++){
    if(i%2==0){
        console.log(i);
    }
}

//odd numbers from 1 to 20
for(let i=1; i<=20; i++){
    if(i%2!=0){
        console.log(i);
    }
}

//numbers divisible by 7 from 1 to 100
for(let i=1; i<=100; i++){
    if(i%7==0){
        console.log(i);
    }
}

//Fibanocci series
let n1=0, n2=1, nextTerm;
let count=10;
for(let i=2; i<count; i++){
    nextTerm=n1+n2;
    console.log('nextTerm: ' + nextTerm);
    n1=n2;
    n2=nextTerm;
}

//Sum of numbers from 1 to 10
let sum=0;
for(let i=1; i<=10; i++){
    sum+=i;
}
console.log('Sum:' +sum);

//multiplication table of 2
let num=2;
for(let i=1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}

//countdown using while loop
let countdown=10;
while(countdown>0){
    console.log(countdown);
    countdown--;
}

//Factorial of a number
let number=6;
let factorial=1;
for(let i=1; i<=number; i++){
    factorial*=i;
}
console.log("Factorial: " + factorial)

//Whether a Year is leap year or not
let year=2020;
if((year%4==0&&year%100!=0)||(year%400==0)){
    console.log(year + "is leap year");
} else{
    console.log(year+"is not leap year");
}

//Largest of Three Numbers
let a=10,b=33,c=25;
console.log(Math.max(a,b,c));