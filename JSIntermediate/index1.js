//  Section 1: Create a function that takes a string as a parameter and returns the string with the first
// character of each word changed into a capital letter, as in the example below. Test it with
// different strings.


console.log(ucFirstLetters("los angeles") )


function ucFirstLetters(input) {

    const words = input.split(" ");

    const  ucFirstLetters = words.map(word => {
        
        if (words.length > 0) {
            return word[0].toUpperCase() + word.slice(1)
        } else {
            return '';
        }
    });

    const resultString = ucFirstLetters.join(" ");

    return resultString
}

console.log(ucFirstLetters('quick quack luck'))
console.log(ucFirstLetters('red blue orange'))