// Accessing array elements
let fruits=["Apple","Mango","banana"];
console.log(fruits[1]);

//Changing Array Elements
fruits[1]="orange";
console.log(fruits)
//Array length
console.log(fruits.length);

//Array Methods
//push()
let nums=[2,4,6,8]
nums.push(10);
console.log(nums);
//pop()
nums.pop();
console.log(nums);
//shift()
nums.shift();
console.log(nums);
//unshift()
nums.unshift(1);
console.log(nums);
//includes()
console.log(nums.includes(5));
//indexOf()
console.log(nums.indexOf(6));
//slice()
console.log(nums.slice(1,2));
//splice
let numbers=[5,10,15,20];
numbers.splice(4,0,7);
console.log(numbers);

let cars =["BMW","KIA","Rolls Royce"];
cars.push("swift");
console.log(cars);
cars.splice(3,0,"Verna");
console.log(cars);

//Looping through Arrays

//for loop
let a=[10,20,30];
for(i=0; i<a.length; i++ ){
    console.log(a[i]);
}

//for...of
for(nums of a){
    console.log(nums);
}

//for each
a.forEach(function(nums,index){
    console.log(index+ ":"+ nums);
});

//Arrow Function
a.forEach((nums) => {
    console.log(nums);  
});

//for...in
for(let i in a){
    console.log(a[i]*2);
}

//While Loop
let b=[40,50,];

while(i<b.length){
    console.log(b[i]);
    i++;
}

//Sum Of Elemnts in an array
let arr=[10,20,30,40];
let sum=0;
for(i=0;i<arr.length;i++){
    sum=sum+arr[i];
} console.log(sum);

//get even elements
for(let i=0; i<arr.length; i++){
    if(i%2==0){
        console.log(arr[i]);
    }
}

//get elements at even indices
let array=[1,2,3,4,5,2,4];
for(let i=0; i<array.length; i++){
    if(array[i]%2==0){
        console.log(array[i]);
    }
}

