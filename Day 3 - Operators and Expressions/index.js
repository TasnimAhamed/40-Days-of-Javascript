console.log("Day 03")

// Operators in JS: 
// Arithmetic Operators: +, -, *, /, %, **
// Assignment Operators: =, +=, -=, *=, /=, %=, **=
// Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// Logical Operators: &&, ||, !, ??
// Unary Operators: ++, --
// Ternary Operator: ? :
// Bitwise Operators: &, |, ^, ~, <<, >>,

// Expressions:
// A statement that evaluates to a value.

// ===========================================

// 1. Arithmetic Operators

console.log("Arithmetic Operators")

let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

// ===========================================

// 2. Assignment Operators

let x = 10;

console.log(x += 5); // x = x + 5
console.log(x -= 5); // x = x - 5
console.log(x *= 5); // x = x * 5
console.log(x /= 5); // x = x / 5
console.log(x %= 5); // x = x % 5
console.log(x **= 5); // x = x ** 5

// ===========================================

// 3. Comparison Operators

console.log("Comparison Operators")

let y = 10;
let z = 5;

console.log(y == z); // Equal to but lossly
console.log(y === z); // Strictly equal to
console.log(y != z); // Not equal to but lossly
console.log(y !== z); // Strictly not equal to
console.log(y > z); // Greater than
console.log(y < z); // Less than
console.log(y >= z); // Greater than or equal to
console.log(y <= z); // Less than or equal to

// 4. Logical Operators

console.log("Logical Operators")

let p = true;
let q = false;

console.log(p && q); // AND
console.log(p || q); // OR
console.log(!p); // NOT

console.log(true && false); // false
console.log(true && true); // true
console.log(false && true); // false

console.log("Cow" && "Horse"); // "Horse"

console.log(4 > 5 && 4 === 6); // false

console.log(false || false); // false
console.log(true || false); // true
console.log(true || true); // true
console.log(false || true); // true

console.log("Cow" || "Horse"); // "Cow"

// Nullish coalescing operator

console.log(null ?? 10);
console.log(undefined ?? 10);
console.log(0 ?? 10);
console.log("" ?? 10);
console.log(false ?? 10);

// 5. Unary Operators

console.log("Unary Operators")

let u = 10;

console.log(u++); // Increment
console.log(u--); // Decrement

// 6. Ternary Operator

console.log("Ternary Operator")

let t = 10;
let v = 5;

console.log(t > v ? t : v); // Ternary Operator


// 7. typeoof and instanceof Operators

console.log("typeof and instanceof Operators");

let w = 10;

console.log(typeof w); // Typeof

// Important
// typeof null => object
// type of array => object
// type of regex => object
// type of function => function

console.log(typeof null); // object
console.log(typeof [1, 2, 3]); // object
console.log(typeof /regex/); // object
console.log(typeof function () {}); // function

// instanceof => works on objects not primitives
console.log(w instanceof Number); // instanceof

// NaN => Not a Number

console.log(NaN == NaN);
console.log(NaN === NaN); 


// 08. Bitwise Operators

console.log("Bitwise Operators");

console.log(5 & 3); // AND
console.log(5 | 3); // OR
console.log(5 ^ 3); // XOR
console.log(~5); // NOT
console.log(5 << 3); // Left Shift
console.log(5 >> 3); // Right Shift