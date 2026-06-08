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

//Print Diagonal Elements of a Matrix
let Mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
console.log(" PrimaryDiagonal  of a Matrix:");
for(let i=0;i<Mat.length;i++){
    console.log(Mat[i][i]);
}
console.log("Secondary Diagonal Elements of a Matrix:");
for(let i=0;i<Mat.length;i++){
    console.log(Mat[i][Mat.length-1-i]);
}
//Sum of Primary Diagonal Elements
let sumPrimary=[
    [9,3,9],
    [2,9,0],
    [7,3,9],
]
let sum=0;
for(let i=0;i<sumPrimary.length;i++){
    sum+=sumPrimary[i][i];
}
console.log("Sum of Primary Diagonal Elements:", sum);

//Sum of Secondary Diagonal Elements
let sumSecondary=[
    [10,20,30],
    [40,50,60],
    [70,80,90],    
];
let sumD=0;
let n=sumSecondary.length;
for(let i=0;i<n;i++){
    sumD+=sumSecondary[i][n-1-i];
}
console.log("Sum of Secondary Diagonal Elements:", sumD);

//Sum of Diagonal Elements of a Square Matrix.
let squareMatrix=[
    [3,2,1],
    [6,5,4],
    [9,8,7],
];
let mainDiag=0;
let secDiag=0;
for(let i=0;i<3;i++){
    mainDiag+=squareMatrix[i][i];
    secDiag+=squareMatrix[i][2-i];
}
console.log("Sum of Main Diagonal Elements:", mainDiag);
console.log("Sum of Secondary Diagonal Elements:", secDiag);

//Matrix Multiplication
let r=2;
let c=2;
let mA=[
    [1,2],
    [3,4],
];
let mB=[
    [5,6],
    [7,8],
];
let mC=[[],[]];
for(let i=0;i<r;i++){
    for(let j=0;j<c;j++){
        mC[i][j]=0;
        for(let k=0;k<c;k++){
            mC[i][j]+=mA[i][k]*mB[k][j];
        }
    }
}
console.log("Matrix Multipliacation:");
console.log(mC);

//3x3 Matrix Multiplication
let r1=3;
let c1=3;
const mD=[
    [2,4,6],
    [3,6,9],
    [4,8,12],
];
const mE=[
    [1,2,3],
    [5,10,15],
    [6,12,18],
];
let mF=[[],[],[]];
for(let i=0;i<r1;i++){
    for(let j=0;j<c1;j++){
        mF[i][j]=0;
        for(let k=0;k<c1;k++){
            mF[i][j]=mD[i][k]*mE[k][j];
        }
    }
}
console.log("3x3 Matrix Multiplication:");
console.log(mF);

//Matrix Scalar multiplication
const mS=[
    [8,4,2],
    [6,3,1],
    [5,2,0],
];
let scalar=2;
for(let i=0;i<mS.length;i++){
    for(let j=0;j<mS[i].length;j++){
        mS[i][j]=mS[i][j]*scalar;
    }
}
console.log("Matrix Scalar Multiplication:");
console.log(mS);

//Identity Matrix
let identity=[
    [1,0,0],
    [0,1,0],
    [0,0,1],
];
let isIdentity=true;
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        if((i===j && identity[i][j]!==1)||(i!==j && identity[i][j]!==0)){
            isIdentity=false;
        }
    }
}
console.log("Is Identity Matrix:", isIdentity);

//Print Matrix Elements in L Shape
let LMatrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
let m=LMatrix.length;
console.log("Matrix Elements in L shape:");
for(let i=0;i<n;i++){
    console.log(LMatrix[i][0]);
}
for(let j=1;j<LMatrix.length;j++){
    console.log(LMatrix[n-1][j]);
}

//Print Matrix Elements in Reverse L Shape
console.log("Matrix Elements in Reverse L Shape:");
for(let i=0;i<m;i++){
    console.log(LMatrix[i][n-1]);
}
for(let j=0;j<n-1;j++){
    console.log(LMatrix[n-1][j]);
}
//Print Top Row
console.log("Top Row of the Matrix:")
for(let i=0;i<LMatrix.length;i++){
    console.log(LMatrix[0][i]);
}
//Print Bottom Row
console.log("Bottom Row of the Matrix:");
for(let i=0;i<LMatrix.length;i++){
    console.log(LMatrix[2][i]);
}
//Print First  Column
console.log("First Column of the Matrix:");
for(let j=0;j<LMatrix.length;j++){
    console.log(LMatrix[j][0]);
}
//Print Last Column
console.log("Last column of the Matrix:");
for(let j=0;j<LMatrix.length;j++){
    console.log(LMatrix[j][n-1]);
}
//Print Corner Elements
console.log("Corner Elements of the Matrix:");
console.log(LMatrix[0][0]);
console.log(LMatrix[0][n-1]);
console.log(LMatrix[n-1][0]);
console.log(LMatrix[n-1][n-1]);

//Print Boundary Elements
console.log("Print Boundary Elements:");
for(let i=0;i<m;i++){
    for(let j=0;j<m;j++){
        if(i==0||i==n-1||j==0||j==n-1){
            console.log(matrix[i][j]);
        }
    }
}

//Rotate Matrix 90° Clockwise
let myMatrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
const p=myMatrix.length;
for(let i=0;i<p;i++){
    for(let j=i+1;j<p;j++){
     [myMatrix[i][j],myMatrix[j][i]]=[myMatrix[j][i],myMatrix[i][j]];
    }
}
for(let i=0;i<p;i++){
    myMatrix[i].reverse();
}
console.log(myMatrix);

//count Even and Odd Numbers
let Matrix1=[
    [2,5,6],
    [1,3,9],
    [4,8,7]
];
let even=0;
let odd=0;
for(let i=0;i<Matrix1.length;i++){
    for(let j=0;j<Matrix1[i].length;j++){
        if(Matrix1[i][j]%2==0){
            even++;
        }else{
                odd++;
        }
    }
}
    console.log(even,odd);

    //Sum Of Each Row
    let Matrix2=[
        [9,5,0],
        [2,9,8],
        [8,6,7],
    ];
    Matrix2[2][2]=10;
    console.log(Matrix2);
    for(let i=0;i<Matrix2.length;i++){
        let sum=0;
        for(let j=0;j<Matrix2[i].length;j++){
            sum+=Matrix2[i][j];
        }
    console.log("Row ${i+1}:",sum);
    }

    //Searching an element
    let marks=[
        [80,93,67],
        [76,56,82],
        [40,68,92],
    ]
    let found=false;
    for(let i=0;i<marks.length;i++){
        for(let j=0;j<marks[i].length;j++){
            if(marks[i][j]===20){
                 found =true;
            }
        }
    }
    console.log(found);