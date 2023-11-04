// // Section 5: Decimal number operations in JavaScript can lead to unexpected results, as in the
// // following:


let twentyCents = 0.20
let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// // 0.2 + 0.1 = 0.30000000000000004


// We can sometimes avoid this using the toFixed function to force the number of decimal
// places as below, but it’s not always useful:


// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);

// console.log(fixedTwenty + fixedTen) //why is this not working?


// a) Explain why the above code returns the wrong answer
// b) Create a function currencyAddition(float1, float2) which safely adds the two
// decimal numbers float1 and float2 and returns the correct float result.
// c) Create a function currencyOperation(float1, float2, operation) which
// safely performs the given operation (either +, -, / or *) on the two numbers and returns

// the correct float result. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

// d) (Extension) Extend the above function to include a fourth argument numDecimals
// which allows the operation to support different amounts of decimal places from 1 to 10.
// HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
// different values as well as the below:


// console.log(0.3 == currencyAddition(0.1, 0.2)) // true
// console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true



//a

// The code does not include a parseFloat

let fixedTwenty = parseFloat(twentyCents.toFixed(2));
let fixedTen = parseFloat(tenCents.toFixed(2));
console.log(fixedTwenty + fixedTen);



//b


// function currencyAddition(float1, float2) {
//     const int1 = Math.round(float1 * 100)
//     const int2 = Math.round(float2 * 100)

//     const intResult = int1 + int2

//     const floatResult = intResult / 100

//     return floatResult
// }

// const twentyCents = .2

// const tenCents = .1

// console.log(currencyAddition(twentyCents, tenCents))


//c

// function currencyOperation(float1, float2, operation) {
//     const int1 = Math.round(float1 * 100)
//     const int2 = Math.round(float2 * 100)

//     const intResult = int1 + int2

//     const floatResult = intResult / 100

//     switch(operation) {
//         case  "+":
//             const intAdd = int1 + int2
//             const floatAdd = intResult / 100
//             // console.log(floatAdd)
//             break;

//         case "-":
//             const intSub = int1 - int2
//             const floatSub = intSub / 100
//             // console.log(floatSub)
//             break;

//         case "*":
//             const intMulti = int1 * int2
//             const floatMulti = intMulti / 1000
//             // console.log(floatMulti)
//             break;

//         case "/":
//             const intDiv = int1 / int2
//             const floatDiv = intDiv / 1
//             // console.log(floatDiv)
//             break;
//     }
//     return floatResult
// }

// console.log(.3 === currencyOperation(.1, .2,))
// console.log(.3 === currencyOperation(.1, .2,"+"))
// console.log(.3 === currencyOperation(.1, .2, "-"))
// console.log(.3 === currencyOperation(.1, .2, "*"))
// console.log(.3 === currencyOperation(.1, .2, "/"))


//d

// function currencyOperation(float1, float2, operation, numDecimals = 2) {
//     const factor = Math.pow(10, numDecimals);
  
//     switch (operation) {
//       case '+':
//         return ((float1 * factor + float2 * factor) / factor).toFixed(numDecimals)
//       case '-':
//         return ((float1 * factor - float2 * factor) / factor).toFixed(numDecimals)
//       case '*':
//         return ((float1 * factor * float2) / factor).toFixed(numDecimals)
//       case '/':
//         if (float2 === 0) {
//           return 'NaN'
//         }
//         return ((float1 * factor) / (float2 * factor)).toFixed(numDecimals)
//       default:
//         return 'NaN'
//     }
// }  
  
  
// const twentyCents = 0.20
// const tenCents = 0.10
  
// const result = currencyOperation(twentyCents, tenCents, '+', 3)
// console.log(result)

// console.log(.3 == currencyAddition(0.1, 0.2))
// console.log(.3 == currencyOperation(0.1, 0.2, '+', 3))