// Section 2: Which of the below are not giving the right answer? Why are they not correct?
// How can we fix them?

let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four
    // The value is "34" (str)
    // three and four are strings so it will concatenate rather than add the values
    // Use "parseInt" to get 7

let multiplication = three * four
    // The value is 12 (int)
    // Answer is already correct

let division = three / four
    // The value is 0.75 (float)
    // Answer is already correct

let subtraction = three - four
    // The value is -1 (int)
    // Answer is already correct

let lessThan1 = three < four
    // The value is true (bool)
    // Answer is already correct (These strings are compared lexicographically)

let lessThan2 = thirty < four
    // The value is flase (bool)
    // These strings are compared lexicographically
    // Add parseInt to thirty or four in order to output the desired answer

console.log(lessThan1)