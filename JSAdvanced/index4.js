// Section 4: The Fibonacci sequence of numbers is a famous pattern where the next number in the
// sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.


// a) Write a function printFibonacci() using setInterval that outputs a number in
// the Fibonacci sequence every second.
// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
// calls to do the same thing
// c) Extend one of the above functions to accept a limit argument, which tells it how many
// numbers to print before stopping.


//A

// function printFibonacci() {
//   let [last, next] = [0, 1];
//   let interval = setInterval(() => {
//     console.log(`[Interval] ${next}`);
//     [last, next] = [next, last + next];
//   }, 1000);
//   return interval;
// }

// const intervalId = printFibonacci();

// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("Fibonacci sequence has been set to stop after five seconds");
// }, 5000);


//B & C

// function printFibonacciTimeouts(limit) {
//   let [last, next] = [0, 1];
//   let count = 0;

//   function printNext() {
//     if (count >= limit) {
//       return;
//     }
//     console.log(`[Timeout] ${next}`);
//     [last, next] = [next, last + next];
//     count++;

//     setTimeout(printNext, 1000);
//   }
//   printNext();
// }

// printFibonacciTimeouts(5);