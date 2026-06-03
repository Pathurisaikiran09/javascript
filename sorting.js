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

    //Insertion Sort
    function insertionSort(arr){
        for(let i=1;i<arr.length;i++){
            let current=arr[i];
            let j=i-1;
            while(j>=0&&arr[j]>current){
                arr[j+1]=arr[j];
                j--;
            }
            arr[j+1]=current;
        }
        return arr;
    }
    let numbers2=[12,11,13,5,6];
    console.log("Insertion Sort:");
    console.log("Before sorting:",numbers2);
    console.log("After sorting:",insertionSort(numbers2));

    //Selection Sort
    function selctionSort(arr){
        for(let i=0;i<arr.length-1;i++){
            let minIndex=i;
            for(let j=1;j<arr.length;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex=j;
                }
            }
            let temp=arr[i];
            arr[i]=arr[minIndex];
            arr[minIndex]=temp;
        }
        return arr;
    }
    let arr2=[23,45,12,67,34];
    console.log("Selection Sort:");
    console.log("Before sorting:",arr2);
    console.log("After sorting:",selctionSort(arr2));

    //Selection Sort 2
    function selectionSort2(arr){
        const n=arr.length
        for(let i=0;i<n-1;i++){
            minIndex=i;
            for(let j=i+1;j<n;j++){
                if(arr[j]<arr[minIndex]){
                    minIndex=j;
                }
            }
            if(minIndex!=i){
                let temp=arr[i];
                arr[i]=arr[minIndex];
                arr[minIndex]=temp;
            }
        }
        return arr;
    }
    let arr3=[22,44,11,55,33];
    console.log("Selection Sort 2:");
    console.log("Before sorting:",arr3);
    console.log("After sorting:",selectionSort2(arr3));

    //Sort array using manual swapping logic
    let numbers3=[5,2,9,1,5,6];
    for(let i=0;i<numbers3.length;i++){
        for(let j=0;j<i;j++){
            if(numbers3[i]<numbers3[j]){
                let temp=numbers3[i];
                numbers3[i]=numbers3[j];
                numbers3[j]=temp;
            }
        }
    }
    console.log("Manual Swapping Logic:",numbers3);