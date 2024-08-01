const p1 = ()=>{
    return new Promise((Resolve,Reject)=>{
        Resolve("Success");
    })
}

p1()
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("Finally");
})