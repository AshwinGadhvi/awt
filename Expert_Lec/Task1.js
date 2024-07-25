const data = [
    {
        "products": [
            {
                "id": "1",
                "name": "Wireless Mouse",
                "category": "Electronics",
                "price": 29.99,
                "stock": 150,
                "rating": 4.5,
                "reviews": [
                    {
                        "review_id": "r1",
                        "user": "John Doe",
                        "rating": 5,
                        "comment": "Great mouse, very responsive!"
                    },
                    {
                        "review_id": "r2",
                        "user": "Jane Smith",
                        "rating": 4,
                        "comment": "Good value for the price."
                    }
                ]
            },
            {
                "id": "2",
                "name": "Mechanical Keyboard",
                "category": "Electronics",
                "price": 79.99,
                "stock": 85,
                "rating": 4.8,
                "reviews": [
                    {
                        "review_id": "r3",
                        "user": "Alice Johnson",
                        "rating": 5,
                        "comment": "Excellent keyboard, very durable."
                    },
                    {
                        "review_id": "r4",
                        "user": "Bob Brown",
                        "rating": 4.5,
                        "comment": "Love the tactile feedback."
                    }
                ]
            },
            {
                "id": "3",
                "name": "USB-C Hub",
                "category": "Electronics",
                "price": 49.99,
                "stock": 200,
                "rating": 4.3,
                "reviews": [
                    {
                        "review_id": "r5",
                        "user": "Carol White",
                        "rating": 4,
                        "comment": "Very useful for connecting multiple devices."
                    },
                    {
                        "review_id": "r6",
                        "user": "David Green",
                        "rating": 4.5,
                        "comment": "Works well, but a bit bulky."
                    }
                ]
            },
            {
                "id": "4",
                "name": "Bluetooth Speaker",
                "category": "Electronics",
                "price": 59.99,
                "stock": 120,
                "rating": 4.7,
                "reviews": [
                    {
                        "review_id": "r7",
                        "user": "Emma Brown",
                        "rating": 5,
                        "comment": "Amazing sound quality!"
                    },
                    {
                        "review_id": "r8",
                        "user": "Frank Wilson",
                        "rating": 4.5,
                        "comment": "Long battery life and easy to use."
                    }
                ]
            },
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
    }
]

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

const finalArray = [...data,...data2];
console.log(finalArray);

const [,,...rest] = data;
console.log(rest);

//find

const index = data.findIndex(x=> {
    x.products[0].name === "Wireless Mouse"}
);

console.log(index);

const price = data.filter((x=>{
    return x.products[0].price <= 29.99;
}))

console.log(price);