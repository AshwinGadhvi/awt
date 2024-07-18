const arr = [1,2,3,4];

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

//add item
const index = 3;
arr.splice(index,0,8);
console.log(arr);

//update item
const index2 = 2;
arr.splice(index2,1,9);
console.log(arr);

//delete item
const end = 3;
arr.splice(end,2);
console.log(arr);