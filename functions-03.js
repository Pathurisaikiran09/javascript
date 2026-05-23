//multiply each element in an array by 2
function multiplyWith2(arr){
  for(let i=0;i<arr.length;i++){
    arr[i]=arr[i]*2;
  }
  return arr;
}
 const numbers=[2,9,4,8];
 console.log(multiplyWith2(numbers));

 //maximum of two numbers
 function max(a,b){
 return(a.b)? a:b;
 }
 console.log(max(4,9));
 console.log(max(8,3));

 //print numbers from 1 to n using recursion
 function r1(n){
    if(n===0) return;
        r1(n-1);
          console.log(n);
 }
 r1(11);

 //factorial of a number using recursion
 function factorial(n){
    if(n===0 || n===1) return 1;
    return n*factorial(n-1);
 }
 console.log(factorial(5));

 //function to reverse a string
function reverseString(str){
    return str.split('').reverse('').join('');
}
console.log(reverseString("javaScript"));

//function to check if a string is a palindrome
function isPalindrome(str){
    const reverse=str.split('').reverse('').join('');
     return str===reverse;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("Kiran"));

//sum of all elements in an array.
function sum(arr){
  let sum=0;
  for(let i=0; i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
console.log(sum([2,8,3,5]));

// largest number in an array.
function large(arr){
  let max=arr[0];
  for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
     max=arr[i];
    }
  }
  return max;
}
console.log(large([1,4,22,15]));