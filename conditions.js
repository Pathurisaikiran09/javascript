//conditional statements

//if statement
let age=15;
if(age>=18){
    console.log('eligible to vote');
}

//if-else statement
let number=2;
if(number>0){
  console.log('positive number');
}else{
    console.log('negative number');
}
//if-else statement 2
let num=10;
if(num%2==0){
    console.log('Even number');
} else{
    console.log('Odd number');
}

//if-else if-else statement
let marks=60;
if(marks>=90){
    console.log('Grade A');
} else if(marks>=75){
    console.log('Grade B');
} else if(marks>=60){
    console.log('Grade C');
}
else{
    console.log('Grade D');
}

//if-else if-else statement 2
let score=85;
if(score>=90){
    console.log('Excellent');
} else if(score>=75){
    console.log('Good');
}

//switch statement
let month = 8;
switch(month){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
}

// Nested if statement
let num1=5;
let num2=10;
if(num1>0){
    if(num2>0){
        console.log('Both numbers are positive');
    }
    if(num2<0){
        console.log('num1 is positive and num2 is negative');
    }
}