// Section 3: Use the following animals array for the below tasks. Test each one by printing the result to
// the console. Review the following link for tips:

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// a) Add 2 new values to the end
// b) Add 2 new values to the beginning
// c) Sort the values alphabetically
// d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
// middle of the animals array with newValue
// e) Write a function findMatchingAnimals(beginsWith) that returns a new array
// containing all the animals that begin with the beginsWith string. Try to make it work
// regardless of upper/lower case.


const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Zebra', 'Anaconda')
console.log(animals)

animals.unshift('Lion', 'Panther')
console.log(animals)

animals.sort()
console.log(animals)


function replaceMiddleAnimal(array, newValue) {
    //replaces middle left if even
    if (array.length % 2 === 0) {
        const middleIndex = array.length / 2 - 1
        array[middleIndex] = newValue
    } else {
        const middleIndex = Math.floor(array.length / 2)
        array[middleIndex] = newValue
    }
    return array
}

console.log(replaceMiddleAnimal(animals, 'Panda'))


// function findMatchingAnimals(array, beginsWith) {
//     if (array.)
// }