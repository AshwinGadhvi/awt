//map method

const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => {
    if (item % 2 == 0) {
        return item * 2;
    }
    return item;
})

console.log(newArr);

const data2 = [
    {
        "id": "5",
        "name": "Smartphone Stand",
        "category": "Accessories",
        "price": 19.99,
        "stock": 300,
        "rating": 4.2,
        "reviews": [
            {
                "review_id": "r9",
                "user": "Grace Lee",
                "rating": 4,
                "comment": "Sturdy and holds the phone well."
            },
            {
                "review_id": "r10",
                "user": "Henry Kim",
                "rating": 4.5,
                "comment": "Very practical and affordable."
            }
        ]
    }
]
//map
const updatedData = data2.map((item) => {
    if (item.price === 19.99) {
        return item.price = 20 * item.stock;
    }
    return item;
})
console.log(updatedData);

//reduce method

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const sum = arr1.reduce((acc, curr) => {
    return acc + curr;
}, 0)
console.log(sum);

const indx = data2.reduce((p, c, i) => {
    if (c.price >= 19.99) {
        return i;
    }
    return p;
}, -1);

console.log(indx);

const male = data2.reduce((p, c, i) => {
    if (c.gender === "male") {
        return i;
    }
    return p;
}, []);

console.log(male);

const gender = [{
    "male": ["Ashwin", "Op", "Bhai"],
    "female": ["m", "c", "b"]
}];

const male1 = [];
const female = [];

const newThing = gender.reduce((p, c, i) => {
    const key = c.male;
    const value = c.female;
    male1.push(key);
    female.push(value);
}, {})

console.log(male1);
console.log(female);


const data = [
    {
        name: "Alice Johnson",
        age: 28,
        gender: "Female",
    },
    {
        name: "Michael Smith",
        age: 35,
        gender: "Male",
    },
    {
        name: "Emma Brown",
        age: 22,
        gender: "Female",
    },
    {
        name: "Daniel Wilson",
        age: 30,
        gender: "Male",
    },
    {
        name: "Olivia Davis",
        age: 26,
        gender: "Female",
    },
    {
        name: "James Martinez",
        age: 40,
        gender: "Male",
    },
    {
        name: "Sophia Garcia",
        age: 33,
        gender: "Female",
    },
    {
        name: "Benjamin Lee",
        age: 27,
        gender: "Male",
    },
    {
        name: "Ava White",
        age: 29,
        gender: "Female",
    },
    {
        name: "Henry Harris",
        age: 31,
        gender: "Male",
    },
];

const gender1 = data.reduce((p, c) => {
    const key = c.gender;
    if (p[key] === undefined) {
        p[key] = [];
    }
    p[key].push(c);
    return p;
})

console.log(gender1);

const age = data.reduce((p,c)=>{
    const addGroup = Math.floor(c.age/10);
    const key = `${addGroup}0-`
    if(p[key] === undefined){
        p[key] = [];
    }
    p[key].push(c);
    return p;
},{})

console.log(age);