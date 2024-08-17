// Encapsulation
// Encapsulation is a concept in object-oriented programming (OOP) that binds together the data and

class User{
    gender ='male'
    static movie = 'Avengers'
    constructor(name,age){
        this.name = name;
        this.age=age;
    }
    static crow()
    {   
        return this.movie;
    }
    //for private use # to make variable private
    #getSalary(){
        return 50000;
    }
    set name(value)
    {
        this._name = this.changeName(value);
    }
    get name()
    {
        return this._name;
    }
    changeName(name)
    {
        return `${name[0].toUpperCase()}${name.slice(1)}`;
    }
    displayDetails(){
        return `Name: ${this.name}, Age: ${this.age},And My Favorite Movie is : ${User.crow()}`
    }
}

const u1 = new User('ashwin',29);
console.log(u1);
// console.log(u1.getSalary());

const u2 = new User('gadhvi',32);
console.log(u2);

//we use static method without createing an instance 

console.log("Ths Color Of Bird : "+User.crow());

console.log(u1.displayDetails());

//encaptulation
//abstraction
//inheritance
//polymorphism


