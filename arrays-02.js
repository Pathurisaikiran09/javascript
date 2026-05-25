//Get even elements in an array
let arr=[1,2,9,6,3,8];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
}

//get elements at even indices
let array=[1,2,3,2,4,1];
for(let i=0;i<array.length;i++){
    if(i%2===0){
        console.log(array[i]);
    }
}

//Sum of all elements in an array
let sumArr=[2,9,4,1];
let sum=0;
for(let i=0;i<sumArr.length;i++){
    sum+=sumArr[i];
}
    console.log(sum);

    //Get max element
    function maxElement(arr){
      let max=arr[0];
      for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
      }
      return max;
    }
          const numbers=[11,4,33,82];
      console.log(maxElement(numbers));

      //reverse an array
      function reverseArray(arr){
        return arr.slice().reverse();
      }
      const data=[3,6,9,12];
      console.log(reverseArray(data));

      //Remove duplicates from array
      function duplicate(arr){
     return[...new Set(arr)];
      }
       const num=[10,20,30,20,10];
       console.log(duplicate(num));

      // Merge two arrays and sort
      function mergeAndsort(arr1,arr2){
        return[...arr1,...arr2].sort((a,b)=>a-b);
        
      }
      console.log(mergeAndsort([3,5,9],[1,6,4]));