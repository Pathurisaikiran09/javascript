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