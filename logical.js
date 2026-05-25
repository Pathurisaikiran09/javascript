//check whether a number is odd or even.
function oddEven(number){
    if(number%2===0){
        console.log(`${number} is Even`);
    }else{
        console.log(`${number} is odd`);
    }
}
oddEven(2);
oddEven(9);

//find largest of three numbers
function findLargest(a,b,c){
    if(a>=b&&a>=c){
        console.log("a is largest");
    }else if(b>=a&&b>=c){
        console.log("b is the largest");
    }else if(c>=a&&c>=b){
        console.log("c is the largest");
    }
    }
  findLargest(10,30,12);

  //generate a multiplication table of a number
  function multiplication(num){
    for(let i=0;i<=10;i++){
        console.log(`${num}x${i}=${num*i}`);
    }
  }
  multiplication(12);

  //calculate the power of a number using a loop.
  function power(base,exponent){
    let result=1;
    for(let i=0;i<exponent;i++){
        result*=base;
    }
    console.log(`${base} is raised to ${exponent} is  ${result}`);
  }
  power(3,4);

  //calculate the sum of digits of a number.
  function sumOfDigits(num){
    let sum=0;
    while(num!=0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    console.log("Sum of all digits",sum);
  }
  sumOfDigits(9652);

  //find GCD of two numbers
  function findGCD(a,b){
    while(b!=0){
        let temp=b;
        b=a%b;
        a=temp;
    }
    console.log("GCD of a is",a);
  }

  findGCD(8,12);