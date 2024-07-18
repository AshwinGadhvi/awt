//immuetably 
const arr = [1,2,3,4,5];

//adding new item
const newArray = [0,...arr];
console.log(newArray);

const index = 3;

const a1 = arr.slice(0,index);
console.log(a1);

const a2 = arr.slice(index);
console.log(a2);

const finalArr = [...a1,8,...a2];
console.log(finalArr);

//Deleting element

const arr2 = [1,2,3,4,5];
const index2 = 3;
const updatedArr = [...arr2.slice(0,index2),8,...arr2.slice(index2+1)];
console.log(updatedArr);

//updating element