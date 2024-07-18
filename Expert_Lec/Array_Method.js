const user = [
    {"name":"Ashwin","Age":26,"Gender":"Male"},
    {"name":"win","Age":27,"Gender":"Male"},
    {"name":"Ash","Age":29,"Gender":"Male"},
    {"name":"Asin","Age":40,"Gender":"Male"},
    {"name":"An","Age":29,"Gender":"Male"},
]

const index = user.findIndex(Element =>{
    console.log(Element.name);
    return Element.name === "Ashwin";
});

console.log(index);

const index2 = user.filter((Element) =>{
    console.log(Element.name);
    return Element.Gender === "Male";
});

console.log(index2);

const mainIndedx = user.findIndex((Element)=>{
    return Element.Age === 27;
})
const user2 = user;
[...user2.slice(0,mainIndedx),40,...user2.slice(mainIndedx+1)];

console.log(user2);
console.log(user);