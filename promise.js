// const { reject } = require("async"); 
console.log("ashwin 1");
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let success = false;
        if(success){
            resolve("operation was successfully");
        }
        else{
            reject("operation was failed");
        }
    },1000);
});

promise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
});
