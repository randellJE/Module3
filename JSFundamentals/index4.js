// Section 4: Rewrite this if using the ternary/conditional operator '?'.
// Test it with different values for a and b. What does the ‘+=’ do?

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;

// if (a + b < 10) {
//     result += 'lesss than 10';
// } else {
//     result += 'greater than 10';
// }


let a = 2, b = 3;
let result = `${a} + ${b} is ${
    a + b < 10 ? 'less than 10' : 'greater than 10'
}`


// The += operator concatenates or adds a value to an existing variable.