//This works too!

// const mergeSortedArrays = (array1, array2) => {
//   for(let i = 0; i < array2.length; i++){
//     array1.push(array2[i]);
//   }
//   function compareNumbers(a,b){
//     return a-b;
//   }
//   console.log(array1.sort(compareNumbers));
// }

const mergeSortedArrays = (array1, array2) => {
  for(let i = 0; i < array2.length; i++){
    array1.push(array2[i]);
  }
  console.log(array1.sort((a,b)=> a-b));
}

mergeSortedArrays([0,3,4,31],[4,6,30]);
