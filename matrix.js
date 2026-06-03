//Printing a matrix
let matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let i=0; i<matrix.length; i++){

console.log(matrix[i]);
}
//Accessing elements in a matrix
console.log(matrix[1][2]);

//Matrix Addition
let A=[
    [1,2],
    [3,4],
];
let B=[
    [5,6],
    [7,8],
];
let result=[];
for(let i=0;i<2;i++){
    result[i]=[];
    for(let j=0;j<2;j++){
        result[i][j]=A[i][j]+B[i][j];
    }
}
console.log(" Matrix Addition:")
console.log(result);

//Matrix Addition 2
let P=[
    [9,6,5],
    [4,3,2],
    [1,0,7],
];
let Q=[
    [7,7,2],
    [2,9,0],
    [7,3,0],
];
let addition=[];
for(let i=0;i<3;i++){
    addition[i]=[];
for(let j=0;j<3;j++){
    addition[i][j]=P[i][j]+Q[i][j];
}
}
console.log("Matrix Addition 2:");
console.log(addition);

//Matrix Subtraction
let X=[
    [10,20],
    [30,40],
];
let Y=[
    [5,15],
    [10,20],
];
let subtraction=[];
for(let i=0;i<2;i++){
    subtraction[i]=[];
    for(let j=0;j<2;j++){
        subtraction[i][j]=X[i][j]-Y[i][j];
    }
}
console.log("Matrix Subtraction:");
console.log(subtraction);

//Transpose of a matrix
let M=[
    [1,2,3],
    [4,5,6],
];
let rows=2;
let cols=3;
let transpose=[[],[],[]];
for(let i=0;i<cols;i++){
    for(let j=0;j<rows;j++){
        transpose[i][j]=M[j][i];
    }
}
console.log("Transpose of a matrix:");
console.log(transpose);