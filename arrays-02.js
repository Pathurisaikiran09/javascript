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

      //Filter out negative numbers from array
      function filterNegatives(arr){
        return arr.filter(num1=>num1>=0);
      }
       const num1=[-9,6,-5,2,3];
       console.log(filterNegatives(num1));

       //check if all elements are positive
    function areAllPositive(arr){
        return arr.every(num=>num>0)
    }
    console.log(areAllPositive([7,5,8]));
    console.log(areAllPositive([-1,3,2]));

    //find second largest number in array
    function secondLargest(arr){
        const uniqueSort=[...new Set(arr)].sort((a,b)=>(b-a));
        return uniqueSort[1]||null;
    }
    console.log(secondLargest([1,21,5,32]));

    //Find index of an element in array
    function findIndex(arr,value){
        return arr.indexOf(value);
    }
    const data1=[96,52,30,70];
    console.log(findIndex(data1,30));

    //count no.of 0's in an array
    function zeros(arr){
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==0){
         count++;
            }
        }
        return count;
    }
    const data2=[0,9,0,8,2,0,0,7];
    console.log(zeros(data2));

    //Sort elements in array (ascending)
    function sortArr(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                 const temp=arr[i];
                 arr[i]=arr[j];
                 arr[j]=temp;
                }
            }
        }
        return arr;
    }
     const numbers1=[7,2,9,0,3,3,7];
     console.log(sortArr(numbers1));

     //Get duplicate elements in array
     function getDuplicate(arr){
        const duplicateArr = [];
        const seen=new Set();
        const added=new Set();
        for(let i=0;i<arr.length;i++){
            if(seen.has(arr[i])&& !added.has(arr[i])){
              duplicateArr.push(arr[i]);
              added.add(arr[i]);   
            }else{
                seen.add(arr[i]);
            }
        }
        return duplicateArr;
     }
      const numbers2=[3,9,2,9,0,2,7,];
      console.log(getDuplicate(numbers2));