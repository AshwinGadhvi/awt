const arr = [1,2,3,4,5,6,7,8];

const a1 = arr.slice(0,arr.length/2);
console.log(a1);

const a2 = arr.slice(arr.length/2,arr.length);
console.log(a2);

if(a1.flat(-1) === 4){
    console.log("a1 is flat");
}

let isExist = false;
//O(logN)
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        isExist = true;
    }    
}

console.log(isExist);