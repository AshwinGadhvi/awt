function* xyz(){
    yield 1;
    yield 2;
}

const gen = xyz();
const one=gen.next();
console.log(one);

const two=gen.next();
console.log(two);

console.log(gen.next());
