// Section 4: Write a function camelCase(cssProp) that changes dash-separated CSS properties like
// 'margin-left' into camel-cased 'marginLeft'.
// The function should remove all dashes, and uppercase the first letter of each word after a
// dash.
// b) Create variants of the camelCase function that use different types of for loops, and
// c) with and without the conditional operator.


//for
// function camelCase(cssProp) {
//     const parts = cssProp.split("-")

//     for (let i = 1; i < parts.length; i++) {
//         parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
//     }
//     return parts.join('')
// }


//for of with if
// function camelCase(cssProp) {
//     const parts = cssProp.split('-')

//     for (let i = 1; i < parts.length; i++) {
//         for (let char of parts[1]) {
//             if (char) {
//                 parts[1] = char.toUpperCase() + parts[1].slice(1)
//                 break
//             }
//         }
//     }
//     return parts.join('')
// }


// //for of without if
// function camelCase(cssProp) {
//     const parts = cssProp.split('-')

//     for (i = 1; i < parts.length; i++) {
//         for (let char of parts[1]) {
//             parts[i] = parts[i].charAt(0).toUpperCase() + parts[i].slice(1)
//         }
//     }
//     return parts.join('')
// }


//for conditionL OP
// function camelCase(cssProp) {
//     const parts = cssProp.split('-')

//     for (i = 1; i < parts.length; i++) {
//         parts[i] = parts[i] ? parts[i][0].toUpperCase() + parts[i].slice(1) : parts[i]
//     }
//     return parts.join('');
// }


console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display