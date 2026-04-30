console.log("Day 02")

// - **Variables:** Variables are containers that used to store data

let fruit = "Mango"
fruit = "Kiwi"

console.log(fruit)


/*
- **Primitive Data Types:**
    - `String` - Text values ("Hello")
    - `Number` - Numeric values (25, 3.14)
    - `Boolean` - True/False (true, false)
    - `Undefined` - A variable declared but not assigned (let x;)
    - `Null` - Represents "nothing" (let y = null;)
    - `BigInt` - Large numbers (BigInt(12345678901234567890))
    - `Symbol` - Unique identifiers (Symbol("id"))
- **Non-Primitive (Reference) Data Types:**
    - `Object` - Collection of key-value pairs
    - `Array` - Ordered list of values
    - `Function` - Code that can be executed
*/

/* 
- **Naming Conventions:**
    - `Rule` - Variable name can't start with a number, special characters except _
    - `Rule` - Variable name can contain letters, numbers, and underscores
    - `Rule` - Variable name can't be a reserved keyword
    - `Convention` - best practice to follow

    - `camelCase` - for variables and functions
    - `PascalCase` - for classes and constructors
    - `snake_case` - for variables and functions (optional)
*/

let firstName = "John"
let FirstName = "John"
let first_name = "John"

/*
- **var vs let vs const:**
    - `var` - function-scoped, can be re-declared and re-assigned
    - `let` - block-scoped, can be re-assigned but can't be re-declared
    - `const` - block-scoped, can't be re-assigned and can't be re-declared
*/

let student = {
    name: "John",
    age: 25,
    isStudent: true
}

console.log(student.name)
console.log(student.age)
console.log(student.isStudent)

student.name = "Jane"
student.age = 26
student.isStudent = false

console.log(student.name)
console.log(student.age)
console.log(student.isStudent)

/*
Task 1: Declare variables for a person's name, age, isStudent status, and favorite programming language.
Task 2: Print the values to the console.
Task 3: Try reassigning values to let and const variables and observe errors.
Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.
*/

// Task 1: Declare variables for a person's name, age, isStudent status, and favorite programming language.
let name = "John"
let age = 25
let isStudent = true
let favoriteProgrammingLanguage = "JavaScript"

// Task 2: Print the values to the console.
console.log(name)
console.log(age)
console.log(isStudent)
console.log(favoriteProgrammingLanguage)

// Task 3: Try reassigning values to let and const variables and observe errors.

const PI = 3.14

// PI = 3.14159 // Errorr

console.log(PI)

// Task 4: Create an object and an array, assign them to new variables, modify, and observe changes.


const person = {
    name: "John",
    age: 25,
    isStudent: true
}

const fruits = ["Mango", "Kiwi", "Banana", "Orange"]

person.name = "Jane"
person.age = 26
person.isStudent = false

fruits.push("Pineapple")

console.log(person)
console.log(fruits)