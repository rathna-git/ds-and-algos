// All the below functions work fine
// function reverse(str){
    //check input
//   if(!str || str.length < 2 || typeof str !== 'string'){
//     return 'Hmm, enter valid string';
//    }

//   str = str.split(''); //need not split, JS splits strings automatically
//   let reversed= [];
//   for(let i = str.length-1; i >=0; i--){
//     reversed.push(str[i]);
//   }
//   return reversed.join('');
// }

//ES6
// const reverse = (str) => str.split('').reverse().join('');

const reverse = (str) => [...str].reverse().join('');

reverse('hello how are you');
