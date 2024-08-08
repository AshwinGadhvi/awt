console.log('Start');

setTimeout(()=>{
    console.log('Timeout Callback');
},1);

setImmediate(()=>{
    for (let index = 0; index >= 0; index++) {
        const element = index;
        console.log(element);
    }
    console.log('Immediate callback');
});

process.nextTick(()=>{
    console.log('Process.next tick');
})

console.log('end');

// setInterval(()=>{
//     console.log("Ashwin Gadhvi");
// },1000)

