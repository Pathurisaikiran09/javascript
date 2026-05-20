//fuunction Declaration
function a(){
    console.log('Hello world');
}
a();

//Function with parameters
function add(a,b){
    console.log(a+b);
}
add(30,22);

//Function with Retrn values
function multiply(a,b){
    return a*b;
}
   let result=multiply(2,10);
   console.log(result);

//Function expressions
 const name=function(){
    console.log("Sai kiran");
 }
 name();

 //Arrow Function
 const square = n => n*n;
    console.log(square(6));

    //Anonymous Function
    setTimeout(function(){
        console.log("Execute");
    },21);

    //Default Parameters
    function greet(name= "Sai"){
        console.log("Hello "+ name);
    } 
    greet();
    greet("Kiran");

// function to check if a number is even.
  function Even(x){
    return x%2 == 0;
  }
    console.log(Even(8));
    console.log(Even(3));

    //function to find the maximum of two numbers
    function max(x,y){
      return(x>y)? x: y;
    }
     console.log(max(12,6));
     console.log(max(9,4));

     // print numbers from 1 to n
     function numbers(n){
        if(n==-1) return;
        numbers(n-1);
        console.log(n)
     }
      numbers(9);

      ////sum of all elements in an array
function sumArray(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++ ){
        sum+=arr[i];
    } return sum;
}
      console.log(sumArray([1,3,5,7,9]));

      //function to reverse a string
      function reverseString(str){
        return str.split('').reverse('').join('');
      }
      console.log(reverseString("SAI"));

    //function to check if a string is a palindrome
    function palindrome(str){
        const reversed=str.split('').reverse('').join('');
        return str == reversed
    }
      console.log(palindrome("Hello"));
      console.log(palindrome("madam"));

      //function to find the largest number in an array.
 function largestNumber(arr){
      let max = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
    }
 }
    return max;
}
      console.log(largestNumber([22,8,6,19,4]));