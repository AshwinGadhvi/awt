// Create an array of numbers
let numbers = [10, 20, 30, 40, 50];

// Find the length of the array
console.log("Length of the array:", numbers.length);

// Access and display specific elements using indexing
console.log("First element:", numbers[0]);
console.log("Third element:", numbers[2]);
console.log("Last element:", numbers[numbers.length - 1]);

// Use array methods to modify the array
numbers.push(60); // Adds an element to the end
console.log("After push:", numbers);

numbers.pop(); // Removes the last element
console.log("After pop:", numbers);

numbers.shift(); // Removes the first element
console.log("After shift:", numbers);

numbers.unshift(5); // Adds an element to the beginning
console.log("After unshift:", numbers);

console.log("Join method:", numbers.join(", ")); // Joins all elements into a string

delete numbers[1]; // Deletes an element but leaves an empty slot
console.log("After delete:", numbers);

let moreNumbers = [70, 80];
let concatenated = numbers.concat(moreNumbers); // Concatenates two arrays
console.log("After concat:", concatenated);

let nestedArray = [1, [2, 3], [4, 5]];
let flattened = nestedArray.flat(); // Flattens a nested array
console.log("After flat:", flattened);

numbers.splice(2, 0, 25, 35); // Adds elements at index 2
console.log("After splice:", numbers);

let sliced = numbers.slice(1, 4); // Extracts a section of the array
console.log("After slice:", sliced);

// Create an object representing a person
let person = {
    name: "Ashwin",
    age: 19,
    gender: "Male"
};

// Function that displays the person's details
function displayPersonDetails(person) {
    console.log("Name:", person.name);
    console.log("Age:", person.age);
    console.log("Gender:", person.gender);
}

// Display the person's details
displayPersonDetails(person);
