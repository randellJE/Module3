// Section 10: The following code uses the Date object to print the current time and the number of hours
// that have passed today so far. Extend the code to do the following:


// const today = new Date();
// console.log('Current time is ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')


// a) Print the total number of minutes that have passed so far today
// b) Print the total number of seconds that have passed so far today
// c) Calculate and print your age as: 'I am x years, y months and z days old'
// d) Write a function daysInBetween(date1, date2) which calculates and returns the
// amount of days in between the two given dates.


//A

// const hours = today.getHours()
// const minutes = today.getMinutes()

// const totalMinutes = hours * 60 + minutes

// console.log(totalMinutes + ' minutes have passed so far today')


//B

// const seconds = today.getSeconds()

// const totalSeconds = totalMinutes * 60 + seconds

// console.log(totalSeconds + ' seconds have passed so far today')


//C

// const birthDate = new Date('2002-04-24')

// const years = today.getFullYear() - birthDate.getFullYear()
// const months = (today.getMonth() - birthDate.getMonth() - 1)
// const days =  ((birthDate.getDate() + 1) - today.getDate() - 3) 

// console.log('I am ', years, ' years old, ', months, ' months and ', days, ' days old')


//D

// function daysInBetween(date1, date2) {
//     const startDate = new Date(date1)  
//     const endDate = new Date(date2)
    
//     const timeDiff = endDate - startDate

//     const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24))

//     return daysDiff
// }

// console.log(daysInBetween('2023-01-01', '2023-02-05'))