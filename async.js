console.log("ashwin 1");
function fetchData(callback){
    setTimeout(()=>{
        const data = {name:'ashwin',age:19};
        console.log('fetch request....');
        callback(null,data);
    },2000)
}
console.log("ashwin 2");
function handleData(error,data){
    if(error)
    {
        console.error("error",error);
    }else{
        console.log("Fetch data",data);
    }
}

fetchData(handleData);