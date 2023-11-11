// Section 2: The following delayMsg function is intended to be used to delay printing a message until some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.


// function delayMsg(msg)
// {
// console.log(`This message will be printed after a delay: ${msg}`)
// }
// setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
// setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
// setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
// delayMsg('#4: Not delayed at all')

// console.log(delayMsg)


//A

// The order will be 4, 3, 2, 1.
// 4 has no delay, 3 has a 0ms delay but the computer has to still read that,
// 2 has a 20ms delay so should be printed after 3, 1 has a 100ms delay it will be printed last.


//B, C & D

const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`)
}

setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
clearTimeout(setTimeout(delayMsg, 10_000, '#5: Delayed by 10000ms'));
delayMsg('#4: Not delayed at all')