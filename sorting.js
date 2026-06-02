//Swappung of two numbers
var a=10;
var b=20;
var temp=a;
a=b;
b=temp;
console.log(a)
console.log(b)

//Using Destructuring
var x=2;
var y=5;
[x,y]=[y,x];
console.log("x:",x)
console.log("y:",y)

//using Addition and Subtraction
let p=7;
let q=5;
p=p+q;
q=p-q;
p=p-q;
console.log("p:",p)
console.log("q:",q)

//Swapping Array Elements
let arr=[9,6,5,2];
[arr[0],arr[2]]=[arr[2],arr[0]];
console.log(arr);

//array.sort() method
let numbers =[9,8,7,6];
numbers.sort();
console.log(numbers)

//String Sorting
let names=["sai","kiran","anil","balu"];
names.sort();
console.log(names)

//Bubble Sort 
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
    }
    let result=bubbleSort([64,34,25,12,22,11,90]);
    console.log( result);

    //Bubble sort 2
    function bubbleSort2(arr){
        const length =arr.length;
        for(let i=0;i<arr.length-1;i++){
            let swapped=false;
            for(let j=0;j<arr.length-1-i;j++){
                if(arr[j]>arr[j+1]){
                    let temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;
                    swapped=true;
                }
            }
            if(!swapped) break;
        }
        return arr;
    }
    let result2=bubbleSort2([9,8,7,6,5]);
    console.log(result2);