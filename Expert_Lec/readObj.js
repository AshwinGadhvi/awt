const Obj = {
    name:'Ashwin',
    gender:'male',
    age:19,
    "sem":5
}

console.log(Obj);
console.log(Obj.name);
console.log(Obj.gender);
console.log(Obj["sem"]);
console.log(Obj.sem)

// const {age,name,gender,["sem"]:sem} = Obj;


//Object Assigment 

//spread Operator 

const newObj = {...Obj};
console.log(newObj);

//delete immutably
const {name,...abc} = Obj
console.log(abc); 