// Section 1: makeCounter below is a decorator function which creates and returns a function that increments a counter.
// a) Create a second counter counter2 using the makeCounter function and test to see if
// it remains independent to counter1
// b) Modify makeCounter so that it takes an argument startFrom specifying where the
// counter starts from (instead of always starting from 0)
// c) Modify makeCounter to take another argument incrementBy, which specifies how
// much each call to counter() should increase the counter value by.

// function makeCounter() {
//   let currentCount = 0;
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

// let counter1 = makeCounter();
// counter1(); // 1
// counter1(); // 2

//A

// let counter2 = makeCounter();
// counter2()

//B

// function makeCounter(startFrom) {
//   let currentCount = Number(startFrom);
//   return function () {
//     currentCount++;
//     console.log(currentCount);
//     return currentCount;
//   };
// }

// let counter2 = makeCounter(2);
// counter2();

//C

// function makeCounter(startFrom, incrementBy) {
//   let currentCount = Number(startFrom);
//   let incrementValue = Number(incrementBy);
//   return function () {
//     currentCount += incrementValue;
//     console.log(currentCount);
//     // console.log(incrementValue);
//     return currentCount;
//   };
// }

// let counter3 = makeCounter(2, 3);
// counter3();
// counter3();