// function to add two numbers
function add(a,b){
    return a+b;
}
console.log(add(9,8));

//function to check if a number is even
function isEven(x){
    return x%2==0;
}
console.log(isEven(3));
console.log(isEven(4));

//Function to multiply each element in an array by 2 
function multiplyWith2(arr){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*2;
    }
    return arr;
}
const num=[6,5,2,3];
console.log(multiplyWith2(num));

// function to find the maximum of two numbers.
function getMax(x,y){
    return(x>y)?x:y;
}
console.log(getMax(10,20));
console.log(getMax(9,8));

//function to print numbers from 1 to n using recursion
function printNumbers(n){
    if(n===0) return;
    printNumbers(n-1);
    console.log(n);
}
  printNumbers(12);

  //function to reverse a string.
     function reverseStr(str){
        return str.split('').reverse('').join('');
     }
      console.log(reverseStr("sai"));

      //function to find the largest number in an array.
      function findLargest(arr){
        let max=arr[0];
      for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
        return max;
      }
      }
      console.log(findLargest([9,5,0,2]));

      //function to return the factorial of a number using recursion
      function factorial(n){
        if(n===0||n===1) return 1;
        return n*factorial(n-1);
      }
      console.log(factorial(8));

      //function to find the sum of all elements in an array.
      function sumArr(arr){
        let sum=0;
        for(let i=0;i<arr.length;i++){
            sum+=arr[i];
        }
        return sum;
      }
      
      console.log(sumArr([9,8,8,6]));