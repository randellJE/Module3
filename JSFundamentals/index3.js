// Section 3: Which of the following console.log messages will print? Why?

// if (0) console.log('#1 zero is true')
    // Will not print
    // 0 is considered a falsy

// if ("0") console.log('#2 zero is true')
    // Will print  
    // "0" will print because it is not an empty string (truthy)

// if (null) console.log('null is true')
    // Will not print
    // null is considered a falsy

// if (-1) console.log('negative is true')
    // Will print
    // -1 is a non-zero number (truthy)

// if (1) console.log('positive is true')
    // Will print
    // 1 is a non-zero number (truthy)