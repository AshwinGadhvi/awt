function function1(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("resolved");
        },2000);
    });
}

async function function2(){
    console.log('calling');
    const result = await function1();
    console.log(result);
}

function2();



function function3(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("resolved");
        },2000)
    })
}

function function4(){
    console.log('calling');
    function3().then(result =>{
        console.log(result);
    });
}

function4();