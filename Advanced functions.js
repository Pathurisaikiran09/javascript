//callback function 
function greet(name,callback){
    console.log("Hello" + " " + name);
    callback()
}
function sayGoodbye(){
    console.log("Goodbye");
}

greet("sai",sayGoodbye);

//callback function 2
function add(a,b){
    return a+b;
}
    function sub(a,b){
   return a-b;
    }
        function calculator(val1,val2,operation){
            return operation(val1,val2);
        }
console.log(calculator(10,20,add));
console.log(calculator(9,6,sub));

//immediately invoked function expression
(function(){
    console.log('Hello world');
})();

//immediately invoked function expression
(function(name){
 console.log(name);
})("Virat Kohli");

//Higher order Function
function teacher(task){
    task();
}
function Assignment(){
    console.log('Writing Assignment')
}
teacher(Assignment);

//Higher Order Functions
function orderFood(callback){
    console.log("Your food is preparing");
    callback();
}
function usernotify(){
    console.log("Your food is ready");
}
orderFood(usernotify);

//Arrow function 
const add1=(a,b)=>a+b;
console.log(add1(5,3))

const multiply=(a,b)=>a*b;
console.log(multiply(5,3))

const div=(a,b)=>a%b;
console.log(div(5,3))

//Calculate area of rectangle.
const getArea=(length,width)=>length*width;
console.log("Area:",getArea(2,6))


//Higher Order Function
function f1(fun){
    var v2=fun(5,6);
    console.log(v2);
}
f1(add);

const n = [1, 2, 3, 4, 5];
const square = n.map((num) => num * num);
console.log(square);

//Pass a function to another function - Apply discount or tax.
function applyCalculation(amount,calculationFunction){
    var result = calculationFunction(amount);
    return result;
}
var addTax =function(amount){
   return amount+(amount*0.18);
}
var applyDiscount =function(amount){
    return amount-(amount*0.10);
}
var taxed=applyCalculation(500,addTax)
  console.log("Price with  tax:"+ taxed);
var discounted =applyCalculation(500,applyDiscount)
    console.log("Price after discount: "+discounted);

    //Return a function from another function - Create multipliers.
    function createMultiplier(multiplier){
        return function(amount){
            return amount*multiplier;
        }
    }
     var double = createMultiplier(2);
     var triple = createMultiplier(3);
     console.log("double of 4:"+ double(4));
     console.log("triple of 4:"+ triple(4));

     //Callback Function - User registration flow.
     function registerUser(username,callback){
        console.log("Register User:"+ username);
        callback();
     }
      function showWelcomeMessage(){
        console.log("Welcome Registration Successful!");
      }
      registerUser("Sai_Kiran",showWelcomeMessage);
      
      //callback function
      function f2(){
        console.log("f2 fun");
        var add =(x,y,z)=>x+y+z;
        return add;
      }
      var sum=f2()
      var r3=sum(1,2,3);
      console.log(r3)